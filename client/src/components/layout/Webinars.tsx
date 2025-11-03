import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WebinarCard } from "@/components/ui/webinar-card";

gsap.registerPlugin(ScrollTrigger);

const webinarData = [
  {
    image: "/figmaAssets/enhancing-your-oracle-erp-workflows-1-1.png",
    duration: "Live",
    title: "Enhancing Your Oracle ERP Workflows",
    date: "Date:28/10/2025, Time: 10:00 am PST",
    buttonText: "Register Now!",
  },
  {
    image:
      "/figmaAssets/fast-tracking-your-oracle-erp-report-development-1.png",
    duration: "45 mins",
    title: "Fast Tracking Your Oracle ERP Development Webinar",
    date: "Date:28/10/2025, Time: 10:00 am PST",
    buttonText: "Watch Now",
  },
  {
    image:
      "/figmaAssets/streamlining-risk-assessment-in-oracle-erp-cloud-1536x864-1.png",
    duration: "45 mins",
    title: "Streamlining Risk Assessment In Oracle ERP",
    date: "Date:28/10/2025, Time: 10:00 am PST",
    buttonText: "Watch Now",
  },
];

export const Webinars = () => {
  const webinarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!webinarsRef.current) return;

    const webinarItems = gsap.utils.toArray(
      webinarsRef.current.children
    ) as HTMLElement[];

    const ctx = gsap.context(() => {
      webinarItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="webinars" className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-extrabold text-gray-900 dark:text-white text-3xl lg:text-5xl text-center mb-12 tracking-wider">
          Webinars
        </h2>
        <div 
          ref={webinarsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {webinarData.map((webinar, index) => (
            <WebinarCard
              key={index}
              index={index}
              image={webinar.image}
              duration={webinar.duration}
              title={webinar.title}
              date={webinar.date}
              buttonText={webinar.buttonText}
              onClick={() => window.open('#', '_blank')}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};