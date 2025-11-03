import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Solutions = () => {
  const solutionsCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!solutionsCardsRef.current) return;

    const cards = gsap.utils.toArray(
      solutionsCardsRef.current.children
    ) as HTMLElement[];

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 60, scale: 0.9 });
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: solutionsCardsRef.current,
          start: "top 80%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" className="py-12 lg:py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={solutionsCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card className="bg-white dark:bg-[#0c0a01] rounded-[15px] shadow-xl dark:shadow-white/20 border border-gray-200 dark:border-0" data-testid="card-solution-finance">
            <CardContent className="p-6 lg:p-8 flex flex-col h-full">
              <img
                className="w-16 h-16 lg:w-20 lg:h-20 mb-4"
                alt="Finance icon"
                src="/figmaAssets/arcticons-mi-finance.svg"
              />
              <h2 className="font-extrabold text-[#015687] dark:text-[#dff1fd] text-2xl lg:text-3xl mb-4 tracking-wider">
                Finance & Audit
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-[#dff1fd] text-sm lg:text-base flex-grow">
                <p><span className="font-bold">Guaranteed Audit Readiness:</span> Certified GoBD and regulatory reporting.</p>
                <p><span className="font-bold">Accelerated Month-End:</span> Instant access to AR supporting documents and previews.</p>
                <p><span className="font-bold">Financial Data Integrity:</span> Ensure data quality and accuracy across all financial modules.</p>
                <p><span className="font-bold">Streamlined Data Migration:</span> Accurate conversion of historical financial data.</p>
              </div>
              <Button className="mt-6 bg-[#015687] hover:bg-[#014570] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-[10px] border border-[#4e8dc0] px-8 py-2.5" data-testid="button-audit-ready">
                Get Audit Ready
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-black rounded-[15px] shadow-xl dark:shadow-white/20 border border-gray-200 dark:border-0" data-testid="card-solution-security">
            <CardContent className="p-6 lg:p-8 flex flex-col h-full">
              <img
                className="w-20 h-20 lg:w-24 lg:h-24 mb-4"
                alt="Security icon"
                src="/figmaAssets/arcticons-dfndr-security.svg"
              />
              <h2 className="font-extrabold text-[#015687] dark:text-[#dff1fd] text-2xl lg:text-3xl mb-4 tracking-wider">
                GRC & Security
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-[#dff1fd] text-sm lg:text-base flex-grow">
                <p><span className="font-bold">Real-Time SoD Enforcement:</span> Automated segregation of duties checks on all users.</p>
                <p><span className="font-bold">Proactive Risk Scoring:</span> Automated configuration scanning using Config Snapshots.</p>
                <p><span className="font-bold">Holistic User Access Control:</span> Full visibility into user roles, access, and privilege inheritance.</p>
                <p><span className="font-bold">Continuous Security Monitoring:</span> Proactive alerts on policy violations and risk exposure.</p>
              </div>
              <Button className="mt-6 bg-[#015687] hover:bg-[#014570] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-[10px] border border-[#4e8dc0] px-8 py-2.5" data-testid="button-risk-assessment">
                Schedule a Risk Assessment
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0c0a01] rounded-[15px] shadow-xl dark:shadow-white/20 border border-gray-200 dark:border-0" data-testid="card-solution-devops">
            <CardContent className="p-6 lg:p-8 flex flex-col h-full">
              <img
                className="w-16 h-16 lg:w-20 lg:h-20 mb-4"
                alt="DevOps icon"
                src="/figmaAssets/carbon-ibm-z-environments-dev-sec-ops.svg"
              />
              <h2 className="font-extrabold text-[#015687] dark:text-[#dff1fd] text-2xl lg:text-3xl mb-4 tracking-wider">
                IT & DevOps
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-[#dff1fd] text-sm lg:text-base flex-grow">
                <p><span className="font-bold">Zero-Downtime Configuration:</span> Safe, fast migration across all ERP environments.</p>
                <p><span className="font-bold">Visual Configuration Comparison:</span> Instant detection of Config drift between instances.</p>
                <p><span className="font-bold">Rapid Custom SQL Development:</span> Securely build and deploy custom reporting and integrations.</p>
                <p><span className="font-bold">High-Volume Data Conversion:</span> Simplify and accelerate complex ERP data loads.</p>
              </div>
              <Button className="mt-6 bg-[#015687] hover:bg-[#014570] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-[10px] border border-[#4e8dc0] px-8 py-2.5" data-testid="button-toolkit">
                Get the Toolkit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};