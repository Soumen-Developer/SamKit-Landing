import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  { year: "2002", description: "Developed Oracle software prototype" },
  { year: "2005", description: "Got our 1st user" },
  { year: "2007", description: "Got Funded" },
  { year: "2010", description: "Expanded" },
  { year: "2015", description: "Developing AI Solution" },
];

export const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const verticalLineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop timeline animation
        "(min-width: 768px)": function () {
          const timelineCards = gsap.utils.toArray(
            timelineRef.current?.querySelectorAll("[data-timeline-card]") || []
          );

          timelineCards.forEach((card, index) => {
            gsap.fromTo(
              card as HTMLElement,
              { opacity: 0, y: 100, scale: 0.85, rotation: -8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.75)",
                scrollTrigger: {
                  trigger: card as HTMLElement,
                  start: "top 90%",
                  once: true,
                },
                delay: index * 0.3,
              }
            );
          });

          gsap.fromTo(
            lineRef.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: timelineData.length * 0.5,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: timelineRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        },
        // Mobile timeline animation
        "(max-width: 767px)": function () {
          const mobileCards = gsap.utils.toArray(
            timelineRef.current?.querySelectorAll("[data-testid$='-mobile']") || []
          );

          gsap.fromTo(
            verticalLineRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: timelineData.length * 0.3,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: timelineRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );

          mobileCards.forEach((card, index) => {
            gsap.fromTo(
              card as HTMLElement,
              { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
              {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card as HTMLElement,
                  start: "top 90%",
                  once: true,
                },
                delay: index * 0.25,
              }
            );
          });
        },
      });

      // Animate dots bounce-in (for all screen sizes)
      dotRefs.current.forEach((dot, index) => {
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "bounce.out",
              scrollTrigger: {
                trigger: dot,
                start: "center 95%",
                once: true,
              },
              delay: index * 0.3 + 0.5,
            }
          );
        }
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  // Tailwind shadow classes for dark/light cards
  const cardShadow =
    "shadow-xl dark:shadow-blue-900/40 shadow-blue-300/40 hover:shadow-2xl transition-shadow";

  return (
    <section id="timeline" className="py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-extrabold text-gray-900 dark:text-white text-3xl lg:text-5xl text-center mb-4 tracking-wider">
          Story of Samkit
        </h2>
        <p className="text-gray-700 dark:text-white text-base lg:text-lg text-center max-w-4xl mx-auto mb-12">
          Why we developed the solutions, years of experience in the industry, personal journey and background
        </p>
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Timeline Line */}
          <div
            ref={lineRef}
            className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-blue-800 dark:from-blue-900 dark:to-blue-500 rounded-full md:block hidden"
            style={{ transform: "scaleX(0)", zIndex: 0, transformOrigin: "left center" }}
          />
          {/* Vertical line for mobile */}
          <div
            ref={verticalLineRef}
            className="absolute top-0 bottom-0 left-1/2 w-2 bg-gradient-to-b from-blue-400 to-blue-800 dark:from-blue-900 dark:to-blue-500 rounded-full md:hidden"
            style={{ transform: "scaleY(0)", zIndex: 0, transformOrigin: "top center" }}
          />

          {/* Timeline */}
          <div
            ref={timelineRef}
            className="flex flex-col md:flex-row justify-between items-center relative"
            style={{ minHeight: "250px" }}
          >
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex-1 w-full flex flex-col md:flex-row items-center relative mb-8 md:mb-0">
                  {/* Dots */}
                  <div
                    ref={(el) => (dotRefs.current[index] = el)}
                    className="w-7 h-7 rounded-full border-4 border-white dark:border-blue-900 bg-blue-500 dark:bg-blue-700 shadow-lg z-10"
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      top: "51%",
                    }}
                  />
                  {/* Cards for desktop */}
                  <div
                    data-timeline-card
                    className={`relative w-full hidden md:block ${isEven ? "mb-48" : "mt-48"}`}
                  >
                    <Card
                      className={`mx-auto bg-white dark:bg-gray-800 rounded-[20px] ${cardShadow}`}
                      data-testid={`timeline-${item.year}`}
                    >
                      <CardContent className="p-6 text-center flex flex-col justify-center">
                        <h3 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-2">
                          {item.year}
                        </h3>
                        <p className="text-sm lg:text-base text-black dark:text-white">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                {/* Vertical line for mobile */}
                  {/* Cards for mobile */}
                  <div className="md:hidden w-full flex items-center" style={{ justifyContent: isEven ? 'flex-end' : 'flex-start' }}>
                       <div className={`w-1/2 ${isEven ? 'pr-1 pl-6' : 'pl-1 pr-6'}`}>
                      <Card
                        className={`bg-white dark:bg-gray-800 rounded-[20px] pb-6 ${cardShadow}`}
                        data-testid={`timeline-${item.year}-mobile`}
                      >
                        <CardContent className="p-4 text-center flex flex-col justify-center">
                          <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                            {item.year}
                          </h3>
                          <p className="text-xs text-black dark:text-white">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};




//  <div key={index} className="flex-1 w-full flex flex-col md:flex-row items-center relative mb-8 md:mb-0">
//                   {/* Dots for Desktop */}
//                   <div
//                     ref={(el) => (dotRefs.current[index] = el)}
//                     className="w-7 h-7 rounded-full border-4 border-white dark:border-blue-900 bg-blue-500 dark:bg-blue-700 shadow-lg z-10 hidden md:block"
//                     style={{
//                       position: "absolute",
//                       left: "50%",
//                       transform: "translate(-50%, -50%)",
//                       top: "50%",
//                     }}
//                   />
//                   {/* Cards for desktop */}
//                   <div
//                     data-timeline-card
//                     className={`relative w-full hidden md:block ${isEven ? "mb-44" : "mt-44"}`}
//                   >
//                     <Card
//                       className={`mx-auto bg-white dark:bg-gray-800 rounded-[20px] ${cardShadow}`}
//                       data-testid={`timeline-${item.year}`}
//                     >
//                       <CardContent className="p-6 text-center flex flex-col justify-center">
//                         <h3 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-2">
//                           {item.year}
//                         </h3>
//                         <p className="text-sm lg:text-base text-black dark:text-white">
//                           {item.description}
//                         </p>
//                       </CardContent>
//                     </Card>
//                   </div>
//                   {/* Content for Mobile */}
//                   <div className="md:hidden w-full flex items-center" style={{ justifyContent: isEven ? 'flex-end' : 'flex-start' }}>
//                     <div className={`w-1/2 ${isEven ? 'pr-4' : 'pl-4'}`}>
//                       <Card
//                         className={`bg-white dark:bg-gray-800 rounded-[20px] pb-6 ${cardShadow}`}
//                         data-testid={`timeline-${item.year}-mobile`}
//                       >
//                         <CardContent className="p-4 text-center flex flex-col justify-center">
//                           <h3 className="text-xl font-bold text-black dark:text-white mb-1">
//                             {item.year}
//                           </h3>
//                           <p className="text-xs text-black dark:text-white">
//                             {item.description}
//                           </p>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   </div>
//                   {/* Dots for Mobile */}
//                   <div
//                     ref={(el) => !dotRefs.current.includes(el) ? (dotRefs.current[index] = el) : null}
//                     className="w-5 h-5 rounded-full border-2 border-white dark:border-blue-900 bg-blue-500 dark:bg-blue-700 shadow-lg z-10 md:hidden"
//                     style={{
//                       position: 'absolute',
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                     }}
//                   />
//                 </div>