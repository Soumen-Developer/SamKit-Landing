import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '@/components/ThemeProvider';

const InteractiveBackground = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const dx = clientX - centerX;
      const dy = clientY - centerY;

      blobsRef.current.forEach((blob, i) => {
        const speed = (i + 1) * 0.02;
        gsap.to(blob, {
          x: dx * speed,
          y: dy * speed,
          duration: 1,
          ease: 'power2.out',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const blobData =
    theme === 'dark'
      ? [
          { color: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600', size: 'w-[500px] h-[500px]', top: '5%', left: '10%' },
          { color: 'bg-gradient-to-r from-teal-500 to-blue-600', size: 'w-[400px] h-[400px]', top: '25%', left: '70%' },
          // { color: 'bg-gradient-to-r from-yellow-500 via-red-600 to-pink-600', size: 'w-[350px] h-[350px]', top: '75%', left: '20%' },
          // { color: 'bg-gradient-to-r from-green-500 to-cyan-500', size: 'w-[300px] h-[300px]', top: '50%', left: '0%' },
          // { color: 'bg-gradient-to-r from-rose-500 to-violet-500', size: 'w-[450px] h-[450px]', top: '85%', left: '65%' },
          // { color: 'bg-gradient-to-r from-sky-600 to-indigo-600', size: 'w-[380px] h-[380px]', top: '0%', left: '40%' },
          // { color: 'bg-gradient-to-r from-orange-500 to-amber-500', size: 'w-[320px] h-[320px]', top: '60%', left: '90%' },
          // { color: 'bg-gradient-to-r from-lime-500 to-emerald-500', size: 'w-[280px] h-[280px]', top: '90%', left: '5%' },
          // { color: 'bg-gradient-to-r from-red-600 to-rose-600', size: 'w-[420px] h-[420px]', top: '35%', left: '30%' },
          { color: 'bg-gradient-to-r from-fuchsia-600 to-purple-600', size: 'w-[360px] h-[360px]', top: '5%', left: '85%' },
          { color: 'bg-gradient-to-r from-cyan-500 to-light-blue-500', size: 'w-[480px] h-[480px]', top: '65%', left: '45%' },
          // { color: 'bg-gradient-to-r from-pink-500 to-rose-500', size: 'w-[410px] h-[410px]', top: '15%', left: '50%' },
          { color: 'bg-gradient-to-r from-violet-600 to-indigo-600', size: 'w-[340px] h-[340px]', top: '80%', left: '0%' },
          { color: 'bg-gradient-to-r from-emerald-500 to-teal-500', size: 'w-[310px] h-[310px]', top: '45%', left: '80%' },
          // { color: 'bg-gradient-to-r from-amber-500 to-yellow-500', size: 'w-[390px] h-[390px]', top: '95%', left: '40%' },
        ]
      : [
          { color: 'bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300', size: 'w-[500px] h-[500px]', top: '5%', left: '10%' },
          { color: 'bg-gradient-to-r from-green-200 to-cyan-200', size: 'w-[400px] h-[400px]', top: '25%', left: '70%' },
          { color: 'bg-gradient-to-r from-amber-200 via-orange-300 to-red-300', size: 'w-[350px] h-[350px]', top: '75%', left: '20%' },
          { color: 'bg-gradient-to-r from-lime-200 to-emerald-300', size: 'w-[300px] h-[300px]', top: '50%', left: '0%' },
          { color: 'bg-gradient-to-r from-fuchsia-300 to-purple-400', size: 'w-[450px] h-[450px]', top: '85%', left: '65%' },
          { color: 'bg-gradient-to-r from-sky-200 to-indigo-200', size: 'w-[380px] h-[380px]', top: '0%', left: '40%' },
          { color: 'bg-gradient-to-r from-orange-200 to-amber-200', size: 'w-[320px] h-[320px]', top: '60%', left: '90%' },
          { color: 'bg-gradient-to-r from-lime-200 to-emerald-200', size: 'w-[280px] h-[280px]', top: '90%', left: '5%' },
          { color: 'bg-gradient-to-r from-red-200 to-rose-200', size: 'w-[420px] h-[420px]', top: '35%', left: '30%' },
          { color: 'bg-gradient-to-r from-fuchsia-200 to-purple-200', size: 'w-[360px] h-[360px]', top: '5%', left: '85%' },
          { color: 'bg-gradient-to-r from-cyan-200 to-light-blue-200', size: 'w-[480px] h-[480px]', top: '65%', left: '45%' },
          { color: 'bg-gradient-to-r from-pink-200 to-rose-200', size: 'w-[410px] h-[410px]', top: '15%', left: '50%' },
          { color: 'bg-gradient-to-r from-violet-300 to-indigo-300', size: 'w-[340px] h-[340px]', top: '80%', left: '0%' },
          { color: 'bg-gradient-to-r from-emerald-200 to-teal-200', size: 'w-[310px] h-[310px]', top: '45%', left: '80%' },
          { color: 'bg-gradient-to-r from-amber-200 to-yellow-200', size: 'w-[390px] h-[390px]', top: '95%', left: '40%' },
        ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-gray-50 dark:bg-black pointer-events-none"
    >
      <div className="relative w-full h-full">
        {blobData.map((blob, i) => (
          <div
            key={i}
            ref={(el) => (blobsRef.current[i] = el as HTMLDivElement)}
            className={`absolute rounded-full ${blob.color} ${blob.size} opacity-30 blur-3xl`}
            style={{
              top: blob.top,
              left: blob.left,
              willChange: 'transform',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveBackground;
