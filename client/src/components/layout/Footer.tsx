import { Separator } from "@/components/ui/separator";
import ScrollToTop from "@/components/ScrollToTop";

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

export const Footer = () => {
  return (
    <>
      <ScrollToTop />
      <footer className="relative backdrop-blur-md bg-white/70 dark:bg-black/40 border-t border-gray-200/50 dark:border-[#025ca5]/50 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              className="bg-white rounded-lg w-32 lg:w-40 h-auto mb-4 block p-0 border-0 hover:shadow-xl transition-all duration-300"
              style={{ lineHeight: 0, backdropFilter: 'blur(8px)' }}
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
              <button className="bg-[#015687]/90 hover:bg-[#014570] text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(1,86,135,0.3)] hover:shadow-[0_4px_25px_rgba(1,86,135,0.4)] backdrop-blur-sm">
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

        <Separator className="bg-gray-300/50 dark:bg-[#025ca5]/50 mb-6 backdrop-blur-sm" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
          <p className="font-light text-gray-700/90 dark:text-white/90 text-sm">
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
          <div>
            <img
              src="/figmaAssets/logos/oracle-partner-2-1-768x176.png"
              alt="Oracle Partner"
              className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity dark:brightness-0 dark:invert"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};