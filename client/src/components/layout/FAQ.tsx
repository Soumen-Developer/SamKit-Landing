// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const faqData = [
//   {
//     question: "Why Develop SQL?",
//     answer:
//       "Develop SQL is a powerful tool designed to simplify the process of running SQL queries and extracting data from Oracle ERP Cloud. By establishing a direct connection with Oracle ERP Cloud, it offers advanced query editing capabilities and robust exporting options, saving valuable time and effort.",
//   },
//   {
//     question: "Do I need additional configurations to use Samkit Fusion App?",
//     answer:
//       "No, the app is a plug-and-play solution with zero additional setup required. It integrates seamlessly with Oracle Fusion Cloud, making the audit process smooth and efficient.",
//   },
//   {
//     question: "How frequently does Samkit Fusion App receive updates?",
//     answer:
//       "We continuously monitor GoBD regulations and Oracle ERP updates to ensure full compliance. Clients receive timely software updates to maintain accuracy and security.",
//   },
//   {
//     question:
//       "How often should we run the CRA, and what are the reporting options?",
//     answer:
//       'It\'s recommended that organisations run CRA on a predefined schedule—monthly, quarterly, or annually—depending on their size and the frequency of configuration changes. This periodic scanning helps prevent "risk creep" from new or shifted settings post go-live.',
//   },
//   {
//     question: "What is the AR Invoice Print Preview tool and how does it help?",
//     answer:
//       "Samkit's AR Invoice Print Preview is a Windows-based GUI plug-in for Oracle ERP Cloud that lets finance teams generate, preview, and download multiple customer invoices in bulk before sending them out to customers.",
//   },
// ];

// export const FAQ = () => {
//   const faqRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!faqRef.current) return;

//     const ctx = gsap.context(() => {
//       const faqItems = gsap.utils.toArray(
//         faqRef.current?.querySelectorAll("[data-faq-item]") || []
//       ) as HTMLElement[];

//       faqItems.forEach((item, index) => {
//         gsap.fromTo(
//           item,
//           { opacity: 0, x: 40 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.6,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: item,
//               start: "top 85%",
//               once: true,
//             },
//             delay: index * 0.1,
//           }
//         );
//       });

//       const leftSide = faqRef.current?.querySelector("div:first-child");
//       if (leftSide) {
//         gsap.fromTo(
//           leftSide,
//           { opacity: 0, x: -40 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.8,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: leftSide,
//               start: "top 85%",
//               once: true,
//             },
//           }
//         );
//       }
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={faqRef} className="py-12 lg:py-20" id="faq">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           <div className="space-y-6">
//             <h2 className="font-normal text-gray-900 dark:text-white text-4xl lg:text-6xl">FAQs</h2>
//             <p className="text-gray-700 dark:text-white text-base lg:text-lg dark:opacity-80">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
//             </p>
//             <Input
//               className="border border-gray-300 dark:border-white bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60"
//               placeholder="Submit a question"
//               data-testid="input-faq-question"
//             />
//             <Button className="bg-[#015687] hover:bg-[#014570] border border-gray-300 dark:border-white text-white" data-testid="button-submit-question">
//               Submit
//             </Button>
//           </div>
//           <div className="space-y-8">
//             {faqData.map((faq, index) => (
//               <div key={index} className="space-y-3" data-faq-item data-testid={`faq-${index}`}>
//                 <h3 className="font-normal text-gray-900 dark:text-white text-lg">{faq.question}</h3>
//                 <p className="text-gray-700 dark:text-white text-base dark:opacity-80">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  { question: "Why Develop SQL?", answer: "Develop SQL is a powerful tool designed to simplify the process of running SQL queries and extracting data from Oracle ERP Cloud. By establishing a direct connection with Oracle ERP Cloud, it offers advanced query editing capabilities and robust exporting options, saving valuable time and effort." },
  { question: "Do I need additional configurations to use Samkit Fusion App?", answer: "No, the app is a plug-and-play solution with zero additional setup required. It integrates seamlessly with Oracle Fusion Cloud, making the audit process smooth and efficient." },
  { question: "How frequently does Samkit Fusion App receive updates?", answer: "We continuously monitor GoBD regulations and Oracle ERP updates to ensure full compliance. Clients receive timely software updates to maintain accuracy and security." },
  { question: "How often should we run the CRA, and what are the reporting options?", answer: "It's recommended that organisations run CRA on a predefined schedule—monthly, quarterly, or annually—depending on their size and the frequency of configuration changes. This periodic scanning helps prevent \"risk creep\" from new or shifted settings post go-live." },
  { question: "What is the AR Invoice Print Preview tool and how does it help?", answer: "Samkit's AR Invoice Print Preview is a Windows-based GUI plug-in for Oracle ERP Cloud that lets finance teams generate, preview, and download multiple customer invoices in bulk before sending them out to customers." },
];

export const FAQ = () => {
  const faqRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!faqRef.current) return;

    const ctx = gsap.context(() => {
      const faqItems = gsap.utils.toArray(
        faqRef.current?.querySelectorAll("[data-faq-item]") || []
      ) as HTMLElement[];

      faqItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
            delay: index * 0.1,
          }
        );
      });

      const leftSide = faqRef.current?.querySelector("div:first-child");
      if (leftSide) {
        gsap.fromTo(
          leftSide,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftSide,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
 <section ref={faqRef} className="py-12 lg:py-20" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Panel (glassmorphism) */}
          <div className="flex flex-col justify-center space-y-6 px-6 py-8 rounded-3xl bg-white/10 dark:bg-grey/1 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.12)]">
            <h2 className="font-bold text-4xl lg:text-6xl mb-1 tracking-tight relative">
              <span className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-slate-900/90 dark:from-white/80 dark:to-white/90 bg-clip-text text-transparent">FAQs</span>
              <span className="relative bg-gradient-to-r from-[#006aa7] via-[#015687] to-[#014570] bg-clip-text text-transparent">FAQs</span>
            </h2>
            <p className="text-gray-500 dark:text-white/80 text-base lg:text-lg max-w-xl">
              Have a question? Find your answer below or ask us directly.
            </p>
            {/* Use a multi-line input appearance and ensure full width */}
            <Input
              className="w-full min-h-[56px] resize-none border border-white/12 dark:border-white/10 bg-white/6 dark:bg-white/4 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-white/16 focus:border-white/20 transition-all shadow-sm placeholder:text-gray-300 px-4 py-3"
              placeholder="Write your question here..."
              data-testid="input-faq-question"
            />
            <Button
              className="w-full mt-2 bg-[#006aa7] hover:bg-[#014570] text-white font-semibold text-base rounded-xl shadow-md px-6 py-3 border-2 border-white/8 dark:border-white/12 disabled:opacity-50"
            >
              Submit
            </Button>
          </div>
      {/* Right FAQs Card List (glass cards) */}
      <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                data-faq-item
                data-testid={`faq-${index}`}
        className="bg-white/8 dark:bg-white/6 border border-white/12 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.08)] rounded-2xl px-7 py-6 transition-transform hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] duration-200 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-[#015687] dark:text-white text-lg mb-2">{faq.question}</h3>
        <p className="text-gray-500 dark:text-white/80 text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
