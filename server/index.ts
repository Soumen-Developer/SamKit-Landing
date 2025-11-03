import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import os from 'os';

// Server configuration
const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  host: process.env.HOST || '0.0.0.0',
  env: process.env.NODE_ENV || 'development'
};

const app = express();

// Enhanced security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Body parsing middleware with size limits
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Server startup
  server.listen(config.port, config.host, () => {
    const networkInterfaces = os.networkInterfaces();
    log(`\n🚀 Server is running in ${config.env} mode`);
    log(`🏠 Local:     http://localhost:${config.port}`);
    
    // Display network URLs
    Object.keys(networkInterfaces).forEach((interfaceName) => {
      const interfaces = networkInterfaces[interfaceName];
      interfaces?.forEach((interface_) => {
        if (interface_.family === 'IPv4' && !interface_.internal) {
          log(`🌐 Network:   http://${interface_.address}:${config.port}`);
        }
      });
    });
    
    log('\n📝 API Endpoints:');
    log(`   - http://localhost:${config.port}/api/*`);
    log(`\n👋 Press CTRL+C to stop the server\n`);
  });

  // Handle graceful shutdown
  const gracefulShutdown = () => {
    log('\n🛑 Received shutdown signal. Closing server...');
    server.close(() => {
      log('✨ Server closed gracefully');
      process.exit(0);
    });
  };

  process.on('SIGTERM', gracefulShutdown);
  process.on('SIGINT', gracefulShutdown);
})().catch((error) => {
  console.error('❌ Failed to start server:', error);
  process.exit(1);
});
