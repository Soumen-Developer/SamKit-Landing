import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const DevelopSQL = () => {
  const developSQLRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  const images: string[] = [

    "/figmaAssets/fusionApp2.png"
  ];

  useEffect(() => {
    if (!developSQLRef.current) return;

    const ctx = gsap.context(() => {
      const children = developSQLRef.current?.children || [];
      gsap.utils.toArray(children).forEach((child: any) => {
        gsap.fromTo(
          child,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: child,
              start: "top 80%",
              once: true,
            },
          }
        );
      });

      if (heroImageRef.current) {
        gsap.fromTo(
          heroImageRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.8,
          }
        );
      }
    });


    return () => ctx.revert();
  }, []);

  return (
    <section ref={developSQLRef} className="py-12 lg:py-20" id="develop-sql">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-extrabold text-gray-900 dark:text-white text-3xl lg:text-5xl text-center mb-6 tracking-wider">
          Develop SQL: Unlocking Custom Reporting and Data Access in Oracle Fusion
        </h2>
        <p className="text-gray-700 dark:text-white text-base lg:text-lg text-center max-w-4xl mx-auto mb-8">
          Accessing necessary data for custom reporting shouldn't require complex workarounds. As a core feature of the Fusion App, Develop SQL gives IT and Business Analysts/Audit Specialists secure, streamlined access to the ERP database. This enables fast development of operational and compliance reports without compromising system stability.
        </p>
        <div className="flex justify-center">
          <Button className="bg-[#015687] hover:bg-[#014570] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-[10px] border border-[#4e8dc0] px-10 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" data-testid="button-try-free">
            Try it for Free
          </Button>
        </div>
      </div>
        <div className="mt-12 px-2 lg:mt-16 max-w-4xl mx-auto">
            <div ref={heroImageRef} className="bg-gray-800 rounded-[1.2rem] shadow-2xl dark:shadow-blue-500/10 pt-3 pl-1 pr-1 pb-1 border border-gray-700 overflow-hidden transform transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-blue-500/20">
              <div className="flex items-center pb-3 pl-3">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="relative w-full h-auto">
                {images.map((src, index) => (
                  <img
                    key={src}
                    className={`w-full h-auto rounded-b-[0.99rem] object-cover ${
                      index === 0 ? "block" : "hidden"
                    }`}
                    alt="Fusion app preview"
                    src={src}
                    data-testid={`img-hero-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
    </section>
  );
};