import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Home", href: "#hero", active: true },
  { label: "About Us", href: "#timeline" },
  { label: "Solutions", href: "#solutions" },
  { label: "News", href: "#blogs" },
  { label: "Events", href: "#webinars" },
];

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  return (
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
  );
};