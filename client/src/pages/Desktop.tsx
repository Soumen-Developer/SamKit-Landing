import InteractiveBackground from '@/components/InteractiveBackground';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { Solutions } from '@/components/layout/Solutions';
import { Stats } from '@/components/layout/Stats';
import { DevelopSQL } from '@/components/layout/DevelopSQL';
import { Timeline } from '@/components/layout/Timeline';
import { Webinars } from '@/components/layout/Webinars';
import { Blogs } from '@/components/layout/Blogs';
import { FAQ } from '@/components/layout/FAQ';
import { Contact } from '@/components/layout/Contact';
import { Footer } from '@/components/layout/Footer';
import CompanyLogosSection from "@/components/ui/logoslider";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BookACall from '@/components/BookACall';

gsap.registerPlugin(ScrollTrigger);

export const Desktop = (): JSX.Element => {
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
        <Header />
        <main>
          <BookACall />
          <Hero />
          <Solutions />
          <Stats />
          <DevelopSQL />
            <CompanyLogosSection />
          <Timeline />
          <Webinars />
          <Blogs />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};
