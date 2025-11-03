import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useIsMobile } from '@/hooks/use-mobile';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const animationFrameId = useRef<number | null>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (isMobile) return;
    
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = window.innerWidth / 2;
    let followerY = window.innerHeight / 2;

    gsap.set(cursor, {
      x: mouseX,
      y: mouseY,
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    gsap.set(follower, {
      x: followerX,
      y: followerY,
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const updateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      
      gsap.set(follower, {
        x: followerX,
        y: followerY,
        xPercent: -50,
        yPercent: -50,
      });
      
      animationFrameId.current = requestAnimationFrame(updateFollower);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        !!target.closest('[data-testid]') ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.classList.contains('cursor-pointer');

      const wasHovering = isHoveringRef.current;
      isHoveringRef.current = isInteractive;

      if (isInteractive && !wasHovering) {
        gsap.to([cursor, follower], {
          scale: 1.5,
          duration: 0.3,
          ease: 'back.out(1.7)',
        });
      } else if (!isInteractive && wasHovering) {
        gsap.to([cursor, follower], {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    document.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover, { passive: true });
    
    document.body.style.cursor = 'none';

    updateFollower();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }

      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
      
      document.body.style.cursor = 'auto';
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-500/50 rounded-full pointer-events-none z-[9998]"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export { CustomCursor };
export default CustomCursor;
