import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/RotatingText";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = ["/figmaAssets/fusionApp.png", "/figmaAssets/fusionApp2.png"];

export const Hero = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTitleRef.current) {
        gsap.fromTo(
          heroTitleRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }

      if (heroTextRef.current) {
        gsap.fromTo(
          heroTextRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.4,
          }
        );
      }

      if (heroButtonsRef.current) {
        gsap.fromTo(
          heroButtonsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.6,
          }
        );
      }

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
    <section id="hero" className="relative py-12 lg:py-24 mt-4">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[20px] p-8 lg:p-12 
          shadow-[0_10px_50px_-12px_rgba(0,0,0,0.25),inset_0_2px_15px_-5px_rgba(0,0,0,0.2)] 
          dark:shadow-[0_10px_50px_-12px_rgba(255,255,255,0.1),inset_0_4px_25px_-5px_rgba(255,255,255,0.2),inset_0_10px_10px_-5px_rgba(255,255,255,0.2)]
          hover:shadow-[0_20px_70px_-12px_rgba(0,0,0,0.3),inset_0_2px_15px_-5px_rgba(0,0,0,0.2)]
          transition-shadow duration-500">
            {/*  dark:hover:shadow-[0_20px_70px_-12px_rgba(255,255,255,0.15),inset_0_4px_25px_-5px_rgba(255,255,255,0.2),inset_0_10px_10px_-5px_rgba(255,255,255,0.2)] */}
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h1 ref={heroTitleRef} className="font-semibold text-2xl sm:text-5xl lg:text-7xl xl:text-8xl leading-tight text-gray-900 dark:text-white">
              Fusion App for
              <br />
              <RotatingText className="text-[#2784b9]"
                texts={[
                  "Faster Audits",
                  "Security Monitoring",
                  "Risk Assessment",
                  "Compliance Reporting",
                  "Data Integrity",
                  "Config Management",
                ]}
                duration={3}
              />
            </h1>
            <p ref={heroTextRef} className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-700 dark:text-white/90">
              Your single integrated platform for Oracle Fusion GRC, Audit, and DevOps.
              Unify user controls (SoD), Config Snapshots, and GoBD reporting. Achieve
              total control and agility.
            </p>
            <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                className="bg-white hover:bg-gray-100 text-black rounded-[10px] border border-[#025ca5] px-5 py-5"
                data-testid="button-free-trial"
              >
                <span className="font-medium text-lg">Free Trial</span>
              </Button>
              <Button
                className="bg-[#015687] hover:bg-[#014570] text-white rounded-[10px] border border-[#025ca5] px-5 py-5"
                data-testid="button-demo"
              >
                <span className="font-medium text-lg">Demo</span>
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-16 max-w-4xl mx-auto">
            <div ref={heroImageRef} className="bg-gray-800 rounded-[1.2rem] shadow-lg pt-3 pl-1 pr-1 pb-1 border border-gray-700 overflow-hidden">
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
        </div>
      </div>
    </section>
  );
};