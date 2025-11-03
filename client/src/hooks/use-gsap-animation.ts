import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
  delay?: number;
  duration?: number;
  stagger?: number | gsap.StaggerVars;
  trigger?: string | Element | null;
  start?: string;
  end?: string;
  once?: boolean;
  scrub?: boolean;
}

/**
 * Custom hook for GSAP animations with ScrollTrigger support
 */
export const useGSAPAnimation = (
  animationFn: (targets: gsap.TweenTarget) => gsap.core.Tween,
  deps: React.DependencyList = [],
  options: AnimationOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const {
      delay = 0,
      duration = 1,
      stagger,
      trigger,
      start = "top 80%",
      end = "bottom 20%",
      once = true,
      scrub = false,
    } = options;

    const context = gsap.context(() => {
      const animationTarget = stagger
        ? gsap.utils.toArray(elementRef.current?.children || [])
        : elementRef.current;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: trigger || elementRef.current,
          start,
          end,
          toggleActions: once ? "play none none none" : "play none none reverse",
          once,
          scrub,
        },
      });

      if (stagger) {
        timeline.add(
          animationFn(animationTarget).delay(delay).duration(duration),
          0
        );
        gsap.set(animationTarget, { opacity: 0 });
      } else {
        gsap.set(elementRef.current, { opacity: 0 });
        timeline.add(animationFn(elementRef.current).delay(delay).duration(duration), 0);
      }
    });

    return () => {
      context.revert();
    };
  }, [animationFn, ...deps]);

  return elementRef;
};

/**
 * Hook for counter animation
 */
export const useCounterAnimation = (
  targetValue: number,
  duration: number = 2,
  trigger?: string | Element | null
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const text = elementRef.current.textContent || "0";
    const startValue = parseInt(text.replace(/\D/g, "")) || 0;

    const obj = { value: startValue };
    const endValue = parseInt(String(targetValue).replace(/\D/g, "")) || targetValue;

    const context = gsap.context(() => {
      gsap.to(obj, {
        value: endValue,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger || elementRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          if (elementRef.current) {
            elementRef.current.textContent = String(Math.round(obj.value));
          }
        },
      });
    });

    return () => {
      context.revert();
    };
  }, [targetValue, duration, trigger]);

  return elementRef;
};

/**
 * Hook for fade in animation
 */
export const useFadeIn = (
  delay: number = 0,
  duration: number = 1,
  y: number = 50
) => {
  return useGSAPAnimation(
    (targets) =>
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        { opacity: 1, y: 0, ease: "power3.out" }
      ),
    [delay, duration, y],
    { delay, duration }
  );
};

/**
 * Hook for slide up animation
 */
export const useSlideUp = (delay: number = 0, duration: number = 1) => {
  return useGSAPAnimation(
    (targets) =>
      gsap.fromTo(
        targets,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power3.out" }
      ),
    [delay, duration],
    { delay, duration }
  );
};

/**
 * Hook for stagger animation
 */
export const useStaggerAnimation = (
  delay: number = 0,
  duration: number = 0.6,
  stagger: number = 0.2
) => {
  return useGSAPAnimation(
    (targets) =>
      gsap.fromTo(
        targets,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "back.out(1.7)",
          stagger,
        }
      ),
    [delay, duration, stagger],
    { delay, duration, stagger }
  );
};

