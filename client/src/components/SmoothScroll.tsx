import { useEffect, ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    let scrollAnimationId: number | null = null;
    let isScrolling = false;

    // Custom smooth scroll function using GSAP
    const smoothScrollTo = (targetY: number, duration: number = 1.2) => {
      if (isScrolling) return;
      
      const startY = window.pageYOffset || window.scrollY;
      const distance = targetY - startY;
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / (duration * 1000), 1);

        // Easing function (ease-in-out)
        const ease = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, startY + distance * ease);

        if (progress < 1) {
          scrollAnimationId = requestAnimationFrame(animateScroll);
        } else {
          isScrolling = false;
          scrollAnimationId = null;
        }
      };

      isScrolling = true;
      scrollAnimationId = requestAnimationFrame(animateScroll);
    };

    // Add smooth scroll CSS
    const style = document.createElement("style");
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      * {
        scrollbar-width: thin;
        scrollbar-color: rgba(1, 86, 135, 0.3) transparent;
      }
      
      *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      *::-webkit-scrollbar-track {
        background: transparent;
      }
      
      *::-webkit-scrollbar-thumb {
        background-color: rgba(1, 86, 135, 0.3);
        border-radius: 4px;
        transition: background-color 0.2s ease;
      }
      
      *::-webkit-scrollbar-thumb:hover {
        background-color: rgba(1, 86, 135, 0.5);
      }
      
      /* Smooth scrolling for all elements */
      * {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    // Enhanced smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement;
      
      if (anchor && anchor.href.includes("#")) {
        const id = anchor.getAttribute("href")?.substring(1);
        if (id) {
          e.preventDefault();
          const element = document.getElementById(id);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            smoothScrollTo(offsetPosition, 1.2);
          }
        }
      }
    };

    // Override default scroll behavior with smooth scroll
    let lastScrollTime = 0;
    const handleWheel = (e: WheelEvent) => {
      // Only apply to regular scrolling, not when using trackpad/mouse wheel normally
      if (Math.abs(e.deltaY) > 50) {
        // This allows native smooth scrolling for fast scrolls
        return;
      }
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("wheel", handleWheel, { passive: true });

    // Smooth scroll on page load if hash exists
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          smoothScrollTo(offsetPosition, 1);
        }
      }, 100);
    }

    return () => {
      if (scrollAnimationId) {
        cancelAnimationFrame(scrollAnimationId);
      }
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("wheel", handleWheel);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return <>{children}</>;
};

