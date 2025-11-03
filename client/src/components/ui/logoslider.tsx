const logoRow1 = [
  '/figmaAssets/logos/Slider-9.png',
  '/figmaAssets/logos/cropped-Untitled-design-4-32x32.png',
  '/figmaAssets/logos/oracle-partner-2-1-768x176.png',
  '/figmaAssets/logos/slider-1-1.png',
  '/figmaAssets/logos/slider-10.png',
  '/figmaAssets/logos/slider-11.png',
  '/figmaAssets/logos/slider-3.png',
  '/figmaAssets/logos/slider-4.png',
  '/figmaAssets/logos/slider-5.png',
  '/figmaAssets/logos/slider-6.png',
  '/figmaAssets/logos/slider-7.png',
  '/figmaAssets/logos/slider-8.png',
];

const logoRow2 = [
  '/figmaAssets/logos/slider-3.png',
  '/figmaAssets/logos/slider-4.png',
  '/figmaAssets/logos/slider-5.png',
  '/figmaAssets/logos/slider-6.png',
  '/figmaAssets/logos/slider-7.png',
  '/figmaAssets/logos/slider-8.png',
  '/figmaAssets/logos/Slider-9.png',
  '/figmaAssets/logos/cropped-Untitled-design-4-32x32.png',
  '/figmaAssets/logos/oracle-partner-2-1-768x176.png',
  '/figmaAssets/logos/slider-1-1.png',
  '/figmaAssets/logos/slider-10.png',
  '/figmaAssets/logos/slider-11.png',
];

interface MarqueeRowProps {
  logos: string[];
  reverse?: boolean;
  speed?: number;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ logos, reverse = false, speed = 30 }) => (
  <div className="overflow-hidden whitespace-nowrap py-2">
    <div
      className={`flex gap-12 animate-marquee ${reverse ? "animate-marquee-reverse" : ""}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {logos.concat(logos).map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt="Company logo"
          className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-200 dark:brightness-0 dark:invert"
        />
      ))}
    </div>
  </div>
);

// Add to your global CSS (e.g. styles.css)
 /*
@keyframes marquee {
  0% { transform: translateX(0%); }
  50% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}
@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  50% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee linear infinite;
}
.animate-marquee-reverse {
  animation: marquee-reverse linear infinite;
}
*/

export default function CompanyLogosSection() {
  return (
    <section className="py-12 bg-white/30 dark:bg-white/5 backdrop-blur-sm border-t border-b border-white/10 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_-10px_15px_-3px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.05),0_-10px_15px_-3px_rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-xl md:text-2xl font-bold mb-8 text-gray-800 dark:text-white">
          Trusted by industry leaders worldwide
        </h3>
        <div className="space-y-8">
          <MarqueeRow logos={logoRow1} speed={24} />
          <MarqueeRow logos={logoRow2} speed={32} reverse />
        </div>
      </div>
    </section>
  );
}
