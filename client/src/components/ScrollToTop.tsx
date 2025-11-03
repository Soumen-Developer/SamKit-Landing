import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ChevronUp } from 'lucide-react';

const radius = 26;
const circumference = 2 * Math.PI * radius;

const getScrollData = () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
  return { progress, scrollY };
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Main scroll/resize handler
  const handleScroll = () => {
    const { progress, scrollY } = getScrollData();
    setScrollProgress(progress);
    setIsVisible(scrollY > 300);
  };

  // Listen on scroll and resize
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // run once on mount in case already scrolled
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate ring offset
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50 group">
          <div className="relative">
            <svg
  className="absolute inset-0 w-[60px] h-[60px] pointer-events-none select-none"
  viewBox="0 0 60 60"
  style={{ transform: "rotate(-90deg)" }} // <-- This starts animation from 12 o'clock!
>
  {/* Background circle */}
  <circle
    cx="30"
    cy="30"
    r={radius}
    fill="none"
    stroke="#006aa733"
    strokeWidth="4"
  />
  {/* Progress circle */}
  <circle
    cx="30"
    cy="30"
    r={radius}
    fill="none"
    stroke="#006aa7"
    strokeWidth="4"
    strokeDasharray={circumference}
    strokeDashoffset={strokeDashoffset}
    strokeLinecap="round"
    style={{ transition: 'stroke-dashoffset 0.3s linear' }}
  />
</svg>

            {/* Button */}
            <Button
              onClick={scrollToTop}
              className="w-[60px] h-[60px] rounded-full p-0 bg-background hover:bg-background/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-[#006aa7]/20 group-hover:border-[#006aa7]/50 flex items-center justify-center"
              aria-label="Scroll to top"
              tabIndex={0}
            >
              <ChevronUp className="h-6 w-6 text-[#006aa7] group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
