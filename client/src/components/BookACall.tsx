import { Phone } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const BookACall = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  // Check if device is mobile and handle mount animation
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Trigger mount animation with longer delay
    setTimeout(() => {
      setIsMounted(true);
    }, 1100); // Increased delay to 1.5 seconds
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to start hide timer
  const startHideTimer = useCallback(() => {
    if (!isMobile) return;
    
    // Clear any existing timer
    if (timer) {
      clearTimeout(timer);
    }
    
    // Set new timer
    const newTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    
    setTimer(newTimer);
  }, [isMobile, timer]);

  // Initial timer setup
  useEffect(() => {
    startHideTimer();
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isMobile, startHideTimer]);

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const swipeDistance = touchStart - touchEnd;

    // If swipe from left to right (positive distance) and long enough
    if (swipeDistance > 50) {
      setIsVisible(true);
    }
  }, [touchStart]);

  // Add touch event listeners to document
  useEffect(() => {
    if (!isMobile) return;

    document.addEventListener('touchstart', handleTouchStart as unknown as EventListener);
    document.addEventListener('touchend', handleTouchEnd as unknown as EventListener);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      document.removeEventListener('touchend', handleTouchEnd as unknown as EventListener);
    };
  }, [isMobile, handleTouchEnd]);

  return (
    <div className={`fixed right-[-4rem] top-1/2 -translate-y-1/2 z-50 transition-all duration-500 transform ${
      !isVisible && isMobile ? 'opacity-0 pointer-events-none' : 'opacity-100'
    } ${isMounted ? 'translate-x-0' : 'translate-x-[200%]'}`}>
      <div className="rotate-[-90deg]">
        <button className="flex items-center gap-2 text-difference rounded-[10px] border border-difference bg-white/10 dark:border-white/20 dark:bg-black/10 backdrop-blur-sm py-2 lg:py-3 px-4 lg:px-6 whitespace-nowrap shadow-[0_0_10px_rgba(0,0,0,0.25)] dark:shadow-[0_0_10px_rgba(255,255,255,0.25)] transition-colors duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black ">
          <div className="pb-4 lg:pb-3">
            <Phone className="w-4 h-4 lg:w-5 lg:h-5"/>
          </div>
          <span className="font-medium text-base lg:text-lg pb-4 lg:pb-3">Book a Call</span>
        </button>
      </div>
    </div>
  );
};

export default BookACall;
