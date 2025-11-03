import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import NotFound from "@/pages/not-found";
import { CustomCursor } from "@/components/CustomCursor";

import { Desktop } from "@/pages/Desktop";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Desktop} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <SmoothScroll>
          <TooltipProvider>
            <Toaster />
            <CustomCursor />
            <Router />
          </TooltipProvider>
        </SmoothScroll>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
