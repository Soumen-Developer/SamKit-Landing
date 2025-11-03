import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: "560", label: "Downloads" },
  { value: "794", label: "Enquiries" },
  { value: "450", label: "Active Users" },
  { value: "10", label: "Clients" },
];

export const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const statElements = gsap.utils.toArray(
      statsRef.current.querySelectorAll("[data-stat-value]")
    ) as HTMLElement[];

    const ctx = gsap.context(() => {
      statElements.forEach((element) => {
        const targetValue = parseInt(element.getAttribute("data-stat-value") || "0");
        const obj = { value: 0 };

        gsap.to(obj, {
          value: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = String(Math.round(obj.value));
          },
        });

        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" className="py-12 lg:py-20 bg-gradient-to-b from-transparent to-gray-100 dark:to-black/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[20px] lg:rounded-full p-8 lg:p-12 
          shadow-[0_10px_50px_-12px_rgba(0,0,0,0.25),inset_0_2px_15px_-5px_rgba(0,0,0,0.2)] 
          dark:shadow-[0_10px_50px_-12px_rgba(255,255,255,0.1),inset_0_-4px_25px_-5px_rgba(255,255,255,0.2),inset_0_10px_10px_-5px_rgba(255,255,255,0.2)]
          hover:shadow-[0_20px_70px_-12px_rgba(0,0,0,0.3),inset_0_2px_15px_-5px_rgba(0,0,0,0.2)]
          transition-shadow duration-500">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div
                  data-stat-value={stat.value}
                  className="font-bold text-gray-900 dark:text-white text-4xl lg:text-5xl xl:text-6xl"
                >
                  {stat.value}
                </div>
                <div className="font-medium text-gray-700 dark:text-white text-base lg:text-lg mt-2 opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};