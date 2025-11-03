import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ThemeToggle";
import InteractiveBackground from '@/components/InteractiveBackground';
import { RotatingText } from "@/components/RotatingText";
import { Clock, ChevronRight, Phone } from "lucide-react";
import CompanyLogosSection from "@/components/ui/logoslider";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: "560", label: "Downloads" },
  { value: "794", label: "Enquiries" },
  { value: "450", label: "Active Users" },
  { value: "10", label: "Clients" },
];

const timelineData = [
  {
    year: "2002",
    description: "Developed Oracle software prototype",
  },
  {
    year: "2005",
    description: "Got our 1st user",
  },
  {
    year: "2007",
    description: "Got Funded",
  },
  {
    year: "2010",
    description: "Expanded",
  },
  {
    year: "2015",
    description: "Developing AI Solution",
  },
];

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
    title: "Streamlining Risk Assessment In Oracle ERP Cloud",
    date: "Date:28/10/2025, Time: 10:00 am PST",
    buttonText: "Watch Now",
  },
];

const blogData = [
  {
    image: "/figmaAssets/placeholder-1.png",
    title: "Best Practices in Selecting a Partner for ERP Implementation",
  },
  {
    image: "/figmaAssets/placeholder-1-1.png",
    title: "Choosing the Right ERP: Top 5 Factors to Consider Before Making a Decision",
  },
];

const faqData = [
  {
    question: "Why Develop SQL?",
    answer:
      "Develop SQL is a powerful tool designed to simplify the process of running SQL queries and extracting data from Oracle ERP Cloud. By establishing a direct connection with Oracle ERP Cloud, it offers advanced query editing capabilities and robust exporting options, saving valuable time and effort.",
  },
  {
    question: "Do I need additional configurations to use Samkit Fusion App?",
    answer:
      "No, the app is a plug-and-play solution with zero additional setup required. It integrates seamlessly with Oracle Fusion Cloud, making the audit process smooth and efficient.",
  },
  {
    question: "How frequently does Samkit Fusion App receive updates?",
    answer:
      "We continuously monitor GoBD regulations and Oracle ERP updates to ensure full compliance. Clients receive timely software updates to maintain accuracy and security.",
  },
  {
    question:
      "How often should we run the CRA, and what are the reporting options?",
    answer:
      'It\'s recommended that organisations run CRA on a predefined schedule—monthly, quarterly, or annually—depending on their size and the frequency of configuration changes. This periodic scanning helps prevent "risk creep" from new or shifted settings post go-live.',
  },
  {
    question: "What is the AR Invoice Print Preview tool and how does it help?",
    answer:
      "Samkit's AR Invoice Print Preview is a Windows-based GUI plug-in for Oracle ERP Cloud that lets finance teams generate, preview, and download multiple customer invoices in bulk before sending them out to customers.",
  },
];

const navLinks = [
  { label: "Home", href: "#hero", active: true },
  { label: "About Us", href: "#timeline" },
  { label: "Solutions", href: "#solutions" },
  { label: "News", href: "#blogs" },
  { label: "Events", href: "#webinars" },
];

const footerQuickLinks = [
  "Home",
  "About",
  "News",
  "Blog",
  "Contact Us",
  "Events",
  "Careers",
];

const footerSolutions = [
  "For Finance & Audit",
  "For DevOps",
  "For Security & Compliance",
];

export const Desktop = (): JSX.Element => {
  const headerRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const solutionsCardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const developSQLRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const webinarsRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const images = ["/figmaAssets/fusionApp.png", "/figmaAssets/fusionApp2.png"];


  // Header animation
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  // Hero section animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title
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

      // Hero text
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

      // Hero buttons
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

      // Hero image
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

  // Solution cards stagger animation
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

  // Stats counter animation
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

        // Initial fade in
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

  // Develop SQL section animation
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
    });

    return () => ctx.revert();
  }, []);

  // Timeline animation
  useEffect(() => {
    if (!timelineRef.current) return;

    const timelineCards = gsap.utils.toArray(
      timelineRef.current.querySelectorAll("[data-timeline-card]")
    ) as HTMLElement[];

    const ctx = gsap.context(() => {
      timelineCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, rotationX: -15 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
            delay: index * 0.15,
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  // Webinars animation
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

  // Blogs animation
  useEffect(() => {
    if (!blogsRef.current) return;

    const blogItems = gsap.utils.toArray(blogsRef.current.children) as HTMLElement[];

    const ctx = gsap.context(() => {
      blogItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
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

  // FAQ animation
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

      // Left side animation
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

  // Contact form animation
  useEffect(() => {
    if (!contactRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Button hover animations
  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    const handlers = new Map<Element, { enter: () => void; leave: () => void }>();

    buttons.forEach((button) => {
      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      handlers.set(button, { enter: handleMouseEnter, leave: handleMouseLeave });
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      handlers.forEach((handler, button) => {
        button.removeEventListener("mouseenter", handler.enter);
        button.removeEventListener("mouseleave", handler.leave);
      });
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }
    } else {
      if (window.scrollY === 0) {
        return;
      }
      window.scrollTo(0, 0);
    }
  }, []);
return (
  <>
    <InteractiveBackground />
<div className="relative z-10 bg-transparent text-gray-900 dark:text-white min-h-screen w-full overflow-x-hidden transition-colors duration-300">        
      <header ref={headerRef} className="fixed top-0 z-50 w-full backdrop-blur-lg bg-white/50 dark:bg-black/30 border-b border-gray-200 dark:border-[#025ca5]/20">
    
        <div className="container mx-auto px-4 py-4 lg:px-8">

          <div className="flex items-center justify-between gap-4">
            <img
              className="h-12 w-auto sm:h-14"
              alt="Samkit Logo"
              src="/figmaAssets/untitled-design--10--1.png"
              data-testid="img-logo"
            />

            <nav className="hidden md:flex items-center gap-2 lg:gap-4 bg-white dark:bg-gray-800 rounded-[20px] border border-[#00afe9] px-4 py-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`${
                    link.active
                      ? "bg-[#015687] text-white px-4 py-2 rounded-[10px]"
                      : "text-black dark:text-white hover:text-[#015687] dark:hover:text-[#00afe9]"
                  } font-medium text-sm lg:text-base transition-colors whitespace-nowrap`}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 lg:gap-4">
              <ThemeToggle />
              <Button
                className="bg-[#015687] hover:bg-[#014570] text-white rounded-[10px] px-4 py-6"
                data-testid="button-register"
              >
                <span className="font-medium text-sm lg:text-base">Register</span>
                <img
                  className="w-6 h-6 hidden sm:block"
                  alt="Arrow"
                  src="/figmaAssets/ph-arrow-up-bold.svg"
                />
              </Button>
            </div>
          </div>
        </div>
      </header>
{/* <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
  <div className="rotate-[-90deg]">
    <Button className="bg-[#015687] hover:bg-[#014570] text-white rounded-[10px] border border-[#025ca5] py-3 px-6 whitespace-nowrap shadow-lg">
      <span className="font-medium text-lg">Book a Call</span>
    </Button>
  </div>
</div> */}
      <div className="fixed right-[-4rem] top-1/2 -translate-y-1/2 z-50">
  <div className="rotate-[-90deg]">
    <button className="flex items-center gap-2 text-difference rounded-[10px] border border-difference border-black/10 bg-white/10 dark:border-white/10 dark:bg-black/10 backdrop-blur-sm py-3 px-6  whitespace-nowrap shadow-lg">
     <div className="pb-4">
      <Phone className="w-5 h-5"/>
      </div>
      <span className="font-medium text-lg pb-4"> Book a Call</span>
    </button>
  </div>
</div>

      <section id="hero" className="relative py-12 lg:py-24">
      {/* <div className="absolute top-1/2 right-0 -translate-y-1/2 px-0 rotate-[-90deg] z-10">
            <Button className="bg-[#015687] hover:bg-[#014570] text-white rounded-[10px] border border-[#025ca5] py-3 whitespace-nowrap">
              <span className="font-medium text-lg">Book a Call</span>
            </Button>
          </div> */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[20px] p-8 lg:p-12 shadow-2xl shadow-inner dark:shadow-[inset_0_4px_25px_-5px_rgba(255,255,255,0.2),inset_0_10px_10px_-5px_rgba(255,255,255,0.2)]">
{/* <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[20px] p-8 lg:p-12 shadow-2xl shadow-inner dark:shadow-[inset_0_10px_12px_-10px_rgba(255,255,255,0.11),inset_0_-12px_15px_-10px_rgba(255,255,255,0.12)]"> */}

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
                {/* <Button
                  className="bg-[#015687] hover:bg-[#014570] text-white rounded-[10px] border border-[#025ca5] px-8 lg:px-10 py-3"
                >
                  <span className="font-medium text-lg">Book a Call</span>
                </Button> */}
              </div>
            </div>

            <div className="mt-12 lg:mt-16 max-w-4xl mx-auto">
              <div ref={heroImageRef} className="bg-gray-800 rounded-[1.2rem] shadow-lg pt-3 pl-1 pr-1 pb-1 border border-gray-700 overflow-hidden">
                <div className="flex items-center pb-3 pl-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  {/* <div><span> {" "}</span><span className="text-white ml-2"> Fusion app</span></div> */}
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

      <section id="stats" className="py-12 lg:py-20 bg-gradient-to-b from-transparent to-gray-100 dark:to-black/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[20px] p-8 lg:p-12 shadow-2xl shadow-inner dark:shadow-[inset_0_-4px_25px_-5px_rgba(255,255,255,0.2),inset_0_10px_10px_-5px_rgba(255,255,255,0.2)]">
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

      <section ref={developSQLRef} className="py-12 lg:py-20" id="develop-sql">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-extrabold text-gray-900 dark:text-white text-3xl lg:text-5xl text-center mb-6 tracking-wider">
            Develop SQL: Unlocking Custom Reporting and Data Access in Oracle Fusion
          </h2>
          <p className="text-gray-700 dark:text-white text-base lg:text-lg text-center max-w-4xl mx-auto mb-8">
            Accessing necessary data for custom reporting shouldn't require complex workarounds. As a core feature of the Fusion App, Develop SQL gives IT and Business Analysts/Audit Specialists secure, streamlined access to the ERP database. This enables fast development of operational and compliance reports without compromising system stability.
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#015687] hover:bg-[#014570] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-[10px] border border-[#4e8dc0] px-10 py-2.5" data-testid="button-try-free">
              Try it for Free
            </Button>
          </div>
        </div>
      </section>
{/* logos slider */}
<section className="">
  <CompanyLogosSection />
</section>

      <section id="timeline" className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-extrabold text-gray-900 dark:text-white text-3xl lg:text-5xl text-center mb-4 tracking-wider">
            Story of Samkit
          </h2>
          <p className="text-gray-700 dark:text-white text-base lg:text-lg text-center max-w-4xl mx-auto mb-12">
            Why we developed the solutions, years of experience in the industry, personal journey and background
          </p>
          
          <div className="relative max-w-6xl mx-auto">
            <div ref={timelineRef} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              {timelineData.map((item, index) => (
                <div key={index} className="flex-1 w-full md:w-auto">
                  <Card
                    data-timeline-card
                    className="bg-white dark:bg-gray-800 rounded-[20px]"
                    data-testid={`timeline-${item.year}`}
                  >
                    <CardContent className="p-6 text-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-2">
                        {item.year}
                      </h3>
                      <p className="text-sm lg:text-base text-black dark:text-white">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < timelineData.length - 1 && (
                    <div className="hidden md:block h-1 bg-white/30 w-full mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="webinars" className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-extrabold text-gray-900 dark:text-white text-3xl lg:text-5xl text-center mb-12 tracking-wider">
            Webinars
          </h2>
          <div ref={webinarsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinarData.map((webinar, index) => (
              <div key={index} className="flex flex-col gap-6" data-testid={`webinar-${index}`}>
                <img
                  className="w-full h-auto object-cover rounded-lg"
                  alt={webinar.title}
                  src={webinar.image}
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-white">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">{webinar.duration}</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white text-xl lg:text-2xl">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white text-sm dark:opacity-80">{webinar.date}</p>
                  <Button className="bg-[#2270b0] hover:bg-[#1a5a8a] text-white rounded-[15px] w-full" data-testid={`button-webinar-${index}`}>
                    {webinar.buttonText}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blogs" className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-extrabold text-gray-900 dark:text-white text-3xl lg:text-5xl text-center mb-12 tracking-wider">
            Blogs
          </h2>
          <div ref={blogsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogData.map((blog, index) => (
              <div key={index} className="flex flex-col gap-4">
                <img
                  className="w-full h-80 object-cover rounded-lg"
                  alt={blog.title}
                  src={blog.image}
                />
                <div className="flex flex-col flex-grow justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-xl lg:text-2xl">
                    {blog.title}
                  </h3>
                  <Button className="bg-[#015687] hover:bg-[#014570] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-[10px] border border-[#4e8dc0] px-6 py-2.5 self-start mt-4" data-testid={`button-blog-${index}`}>
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={faqRef} className="py-12 lg:py-20" id="faq">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="font-normal text-gray-900 dark:text-white text-4xl lg:text-6xl">FAQs</h2>
              <p className="text-gray-700 dark:text-white text-base lg:text-lg dark:opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
              <Input
                className="border border-gray-300 dark:border-white bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60"
                placeholder="Submit a question"
                data-testid="input-faq-question"
              />
              <Button className="bg-[#015687] hover:bg-[#014570] border border-gray-300 dark:border-white text-white" data-testid="button-submit-question">
                Submit
              </Button>
            </div>
            <div className="space-y-8">
              {faqData.map((faq, index) => (
                <div key={index} className="space-y-3" data-faq-item data-testid={`faq-${index}`}>
                  <h3 className="font-normal text-gray-900 dark:text-white text-lg">{faq.question}</h3>
                  <p className="text-gray-700 dark:text-white text-base dark:opacity-80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 lg:py-20 bg-gradient-to-b from-transparent to-gray-100 dark:to-[#015687]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div ref={contactRef} className="bg-[#015687] dark:bg-[#015687] rounded-[20px] p-8 lg:p-12">
              <h2 className="font-extrabold text-white text-3xl lg:text-4xl text-center mb-8 tracking-wider">
                Contact Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-white text-xs mb-2 block">First Name</label>
                  <Input className="bg-transparent border-b border-white text-white rounded-none" data-testid="input-firstname" />
                </div>
                <div>
                  <label className="text-white text-xs mb-2 block">Last Name</label>
                  <Input className="bg-transparent border-b border-white text-white rounded-none" data-testid="input-lastname" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-white text-xs mb-2 block">Email</label>
                  <Input className="bg-transparent border-b border-white text-white rounded-none" data-testid="input-email" />
                </div>
                <div>
                  <label className="text-white text-xs mb-2 block">Phone Number</label>
                  <Input className="bg-transparent border-b border-white text-white rounded-none" data-testid="input-phone" />
                </div>
              </div>
              <div className="mb-6">
                <label className="text-white text-xs mb-2 block">Message</label>
                <Input className="bg-transparent border-b border-white text-white rounded-none" placeholder="Write your message.." data-testid="input-message" />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Checkbox className="border-white" data-testid="checkbox-privacy" />
                  <label className="text-white text-xs">I agree to the privacy policy.</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox className="border-white" data-testid="checkbox-newsletter" />
                  <label className="text-white text-xs">I would like to receive news and insights from Samkit Digital.</label>
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-white hover:bg-gray-100 text-[#025ca5] rounded-[22.5px] px-12 py-4" data-testid="button-send-message">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 dark:bg-[#0c0a01] border-t border-gray-300 dark:border-[#025ca5]">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
<button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  aria-label="Scroll to top"
  className="bg-white rounded-lg w-32 lg:w-40 h-auto mb-4 block p-0 border-0"
  style={{ lineHeight: 0 }}
>
  <img
    alt="Samkit logo"
    src="/figmaAssets/untitled-design--10--2.png"
    className="w-full h-auto"
    draggable={false}
  />
</button>
              <p className="font-light text-gray-700 dark:text-white text-sm leading-relaxed">
                Leading Oracle software implementation services provider globally.
              </p>
              <div className="mt-6">
              <button className="bg-[#015687] hover:bg-[#014570] text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition-all shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Book a Meeting
              </button>
            </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 tracking-wider">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2">
                {footerQuickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-light text-gray-700 dark:text-white text-sm hover:text-[#00afe9] transition-colors"
                    data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 tracking-wider">
                Solutions
              </h3>
              <div className="flex flex-col gap-2">
                {footerSolutions.map((solution, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-light text-gray-700 dark:text-white text-sm hover:text-[#00afe9] transition-colors"
                    data-testid={`link-solution-${index}`}
                  >
                    {solution}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 tracking-wider">
                Contact Us
              </h3>
              <div className="flex flex-col gap-2">
                <p className="font-light text-gray-700 dark:text-white text-sm leading-relaxed">
                  124 City Road, London EC1V 2NX, UK
                </p>
                <a
                  href="mailto:info@samkit.co.uk"
                  className="font-light text-gray-700 dark:text-white text-sm hover:text-[#00afe9] transition-colors"
                  data-testid="link-email"
                >
                  info@samkit.co.uk
                </a>
                <div className="flex gap-3 mt-2">
                  <a href="#" className="hover:opacity-80 transition-opacity" data-testid="link-social-1">
                    <img
                      className="w-6 h-6 object-cover"
                      alt="Social media"
                      src="/figmaAssets/vector-5-1.png"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity" data-testid="link-social-2">
                    <img
                      className="w-6 h-6 object-cover"
                      alt="Social media"
                      src="/figmaAssets/vector-6-1.png"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity" data-testid="link-social-3">
                    <img
                      className="w-6 h-6 object-cover"
                      alt="Social media"
                      src="/figmaAssets/vector-7-1.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-300  dark:bg-[#025ca5] mb-6" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-light text-gray-700 dark:text-white text-sm">
              © {new Date().getFullYear()} Samkit Infosystems. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-light text-gray-700 dark:text-white text-sm hover:text-[#00afe9] transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-light text-gray-700 dark:text-white text-sm hover:text-[#00afe9] transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>


      {/* <footer className="bg-gradient-to-t from-[#e8f2fa] to-gray-100 dark:from-[#07080d] dark:to-[#0c0a01] border-t border-gray-300 dark:border-[#025ca5] shadow-[0_-2px_24px_rgba(40,80,170,0.04)] dark:shadow-[0_-2px_32px_rgba(2,92,165,0.14)] relative">
  <div className="container mx-auto px-4 lg:px-8 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
      <div>
        <img
          className="w-32 lg:w-40 h-auto mb-4"
          alt="Samkit logo"
          src="/figmaAssets/untitled-design--10--2.png"
        />
        <p className="font-light text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">
          Leading Oracle software implementation services provider globally.
        </p>
        <button className="bg-[#015687] hover:bg-[#014570] text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition-all shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          Book a Meeting
        </button>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 tracking-wide">
          Quick Links
        </h3>
        <div className="flex flex-col gap-1 group">
          {footerQuickLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              tabIndex={0}
              className="font-light text-gray-700 dark:text-gray-300 text-sm hover:text-[#015687] focus:text-[#015687] relative px-1 transition-colors duration-200
              after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#015687] after:transition-all after:duration-300 group-hover:after:w-full hover:after:w-full focus:after:w-full"
              data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 tracking-wide">
          Solutions
        </h3>
        <div className="flex flex-col gap-1 group">
          {footerSolutions.map((solution, index) => (
            <a
              key={index}
              href="#"
              tabIndex={0}
              className="font-light text-gray-700 dark:text-gray-300 text-sm hover:text-[#015687] focus:text-[#015687] relative px-1 transition-colors duration-200
              after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#015687] after:transition-all after:duration-300 group-hover:after:w-full hover:after:w-full focus:after:w-full"
              data-testid={`link-solution-${index}`}
            >
              {solution}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 tracking-wide">
          Contact Us
        </h3>
        <div className="flex flex-col gap-2">
          <p className="font-light text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            124 City Road, London EC1V 2NX, UK
          </p>
          <a
            href="mailto:info@samkit.co.uk"
            aria-label="Send email to info@samkit.co.uk"
            className="font-light text-[#015687] dark:text-[#64bbe8] text-sm underline decoration-dotted underline-offset-4 hover:text-[#00afe9] focus:text-[#00afe9] transition-colors"
            data-testid="link-email"
          >
            info@samkit.co.uk
          </a>
          <a
            href="tel:+441234567890"
            aria-label="Call Samkit"
            className="font-light text-gray-700 dark:text-gray-300 text-sm hover:text-[#00afe9] focus:text-[#00afe9] transition-colors"
          >
            +44 1234 567890
          </a>
          <div className="flex gap-3 mt-3">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity rounded-full focus:ring-2 focus:ring-[#015687]">
              <img
                className="w-6 h-6 object-cover"
                alt="LinkedIn"
                src="/figmaAssets/vector-5-1.png"
              />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity rounded-full focus:ring-2 focus:ring-[#00afe9]">
              <img
                className="w-6 h-6 object-cover"
                alt="Twitter"
                src="/figmaAssets/vector-6-1.png"
              />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity rounded-full focus:ring-2 focus:ring-[#015687]">
              <img
                className="w-6 h-6 object-cover"
                alt="Facebook"
                src="/figmaAssets/vector-7-1.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <Separator className="bg-gray-300 dark:bg-[#025ca5] mb-8" />

    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="font-light text-gray-700 dark:text-gray-300 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">Samkit Infosystems</span>. All rights reserved.
      </p>
      <div className="flex gap-8">
        <a
          href="#"
          className="font-light text-gray-700 dark:text-gray-300 text-sm hover:text-[#015687] focus:text-[#015687] transition-colors"
          data-testid="link-privacy"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="font-light text-gray-700 dark:text-gray-300 text-sm hover:text-[#015687] focus:text-[#015687] transition-colors"
          data-testid="link-terms"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</footer> */}

    </div>
  </>
);
};

