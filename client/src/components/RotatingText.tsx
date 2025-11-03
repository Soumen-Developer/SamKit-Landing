import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface RotatingTextProps {
  texts: string[];
  duration?: number; // Time each text stays visible (in seconds)
  className?: string;
}

export const RotatingText = ({ 
  texts, 
  duration = 3,
  className = "" 
}: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (texts.length <= 1) return;

    const animateText = () => {
      if (!textRef.current) return;

      // Fade out current text
      gsap.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          // Update text
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          
          // Fade in new text
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            }
          );
        },
      });
    };

    // Set up interval
    timeoutRef.current = setInterval(animateText, duration * 1000);

    // Initial fade in
    if (textRef.current) {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      });
    }

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [texts, duration]);

  return (
    <span ref={textRef} className={`inline-block ${className}`}>
      {texts[currentIndex]}
    </span>
  );
};

