import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="contact" className="py-12 lg:py-20 bg-gradient-to-b from-transparent to-gray-100 dark:to-[#015687]/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="glass-morphism-form p-8 lg:p-12 rounded-[20px]">
              <h2 className="font-extrabold text-black dark:text-white text-3xl lg:text-4xl text-center lg:text-left mb-8 tracking-wider">
                Contact Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-black dark:text-white text-xs mb-2 block">First Name</label>
                  <Input className="bg-transparent border-b border-black dark:border-white text-white rounded-[10px]" data-testid="input-firstname" />
                </div>
                <div>
                  <label className="text-black dark:text-white text-xs mb-2 block">Last Name</label>
                  <Input className="bg-transparent border-b border-black dark:border-white text-white rounded-[10px]" data-testid="input-lastname" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-black dark:text-white text-xs mb-2 block">Email</label>
                  <Input className="bg-transparent border-b border-black dark:border-white text-white rounded-[10px]" data-testid="input-email" />
                </div>
                <div>
                  <label className="text-black dark:text-white text-xs mb-2 block">Phone Number</label>
                  <Input className="bg-transparent border-b border-black dark:border-white text-white rounded-[10px]" data-testid="input-phone" />
                </div>
              </div>
              <div className="mb-6">
                <label className="text-black dark:text-white text-xs mb-2 block">Message</label>
                <Input className="bg-transparent border-b border-black dark:border-white text-white rounded-[10px]" placeholder="Write your message.." data-testid="input-message" />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Checkbox className="border-black dark:border-white" data-testid="checkbox-privacy" />
                  <label className="text-black dark:text-white text-xs">I agree to the privacy policy.</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox className="border-black dark:border-white" data-testid="checkbox-newsletter" />
                  <label className="text-black dark:text-white text-xs">I would like to receive news and insights from Samkit Digital.</label>
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-white hover:bg-blue-100 text-[#025ca5] rounded-[22.5px] px-4 py-4" data-testid="button-send-message">
                  Send Message
                </Button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};