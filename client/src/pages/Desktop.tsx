import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Schedule, ChevronRight } from "lucide-react";

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
    title: "Choosing the Right ERP: Top 5 Factors to Consider",
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
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "News", href: "#news" },
  { label: "Events", href: "#events" },
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
  return (
    <div className="bg-black dark:bg-black text-white dark:text-white min-h-screen w-full overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] bg-gradient-to-b from-[#015687] to-[#015687] w-[600px] h-[600px] rounded-full blur-[200px] opacity-50" />
        <div className="absolute top-[30%] right-[-5%] bg-gradient-to-b from-[#00a2b4] to-[#4b004e] w-[600px] h-[600px] rounded-full blur-[200px] opacity-50" />
        <div className="absolute top-[60%] left-[5%] bg-gradient-to-b from-[#00a2b4] to-[#4b004e] w-[600px] h-[600px] rounded-full blur-[200px] opacity-50" />
        <div className="absolute bottom-[10%] right-[10%] bg-gradient-to-b from-[#00a2b4] to-[#4b004e] w-[600px] h-[600px] rounded-full blur-[200px] opacity-50" />
      </div>

      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-black/50 dark:bg-black/50 border-b border-[#025ca5]/20">
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
                className="bg-[#015687] hover:bg-[#014570] text-white rounded-[5px] px-4 lg:px-6 py-2"
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

      <section className="relative py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h1 className="font-semibold text-4xl sm:text-5xl lg:text-7xl xl:text-8xl leading-tight dark:text-white">
              Fusion App for
              <br />
              Faster Audits
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Your single integrated platform for Oracle Fusion GRC, Audit, and DevOps.
              Unify user controls (SoD), Config Snapshots, and GoBD reporting. Achieve
              total control and agility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                className="bg-white hover:bg-gray-100 text-black rounded-[10px] border border-[#025ca5] px-8 lg:px-10 py-3"
                data-testid="button-free-trial"
              >
                <span className="font-medium text-lg">Free Trial</span>
              </Button>
              <Button
                className="bg-[#015687] hover:bg-[#014570] text-white rounded-[10px] border border-[#025ca5] px-8 lg:px-10 py-3"
                data-testid="button-demo"
              >
                <span className="font-medium text-lg">Demo</span>
              </Button>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 max-w-4xl mx-auto">
            <img
              className="w-full h-auto rounded-t-[20px] object-cover"
              alt="Fusion app preview"
              src="/figmaAssets/fusion-app-1.png"
              data-testid="img-hero"
            />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="bg-[#0c0a01] dark:bg-[#0c0a01] rounded-[15px] shadow-lg border-0" data-testid="card-solution-finance">
              <CardContent className="p-6 lg:p-8">
                <img
                  className="w-16 h-16 lg:w-20 lg:h-20 mb-4"
                  alt="Finance icon"
                  src="/figmaAssets/arcticons-mi-finance.svg"
                />
                <h2 className="font-extrabold text-[#dff1fd] text-2xl lg:text-3xl mb-4 tracking-wider">
                  Finance & Audit
                </h2>
                <div className="space-y-3 text-[#dff1fd] text-sm lg:text-base">
                  <p><span className="font-bold">Guaranteed Audit Readiness:</span> Certified GoBD and regulatory reporting.</p>
                  <p><span className="font-bold">Accelerated Month-End:</span> Instant access to AR supporting documents and previews.</p>
                  <p><span className="font-bold">Financial Data Integrity:</span> Ensure data quality and accuracy across all financial modules.</p>
                  <p><span className="font-bold">Streamlined Data Migration:</span> Accurate conversion of historical financial data.</p>
                </div>
                <Button className="mt-6 bg-white hover:bg-gray-100 text-black rounded-[10px] border border-[#4e8dc0] px-8 py-2.5" data-testid="button-audit-ready">
                  Get Audit Ready
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black dark:bg-black rounded-[15px] shadow-lg border-0" data-testid="card-solution-security">
              <CardContent className="p-6 lg:p-8">
                <img
                  className="w-20 h-20 lg:w-24 lg:h-24 mb-4"
                  alt="Security icon"
                  src="/figmaAssets/arcticons-dfndr-security.svg"
                />
                <h2 className="font-extrabold text-[#dff1fd] text-2xl lg:text-3xl mb-4 tracking-wider">
                  GRC & Security
                </h2>
                <div className="space-y-3 text-[#dff1fd] text-sm lg:text-base">
                  <p><span className="font-bold">Real-Time SoD Enforcement:</span> Automated segregation of duties checks on all users.</p>
                  <p><span className="font-bold">Proactive Risk Scoring:</span> Automated configuration scanning using Config Snapshots.</p>
                  <p><span className="font-bold">Holistic User Access Control:</span> Full visibility into user roles, access, and privilege inheritance.</p>
                  <p><span className="font-bold">Continuous Security Monitoring:</span> Proactive alerts on policy violations and risk exposure.</p>
                </div>
                <Button className="mt-6 bg-white hover:bg-gray-100 text-black rounded-[10px] border border-[#4e8dc0] px-8 py-2.5" data-testid="button-risk-assessment">
                  Schedule a Risk Assessment
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#0c0a01] dark:bg-[#0c0a01] rounded-[15px] shadow-lg border-0" data-testid="card-solution-devops">
              <CardContent className="p-6 lg:p-8">
                <img
                  className="w-16 h-16 lg:w-20 lg:h-20 mb-4"
                  alt="DevOps icon"
                  src="/figmaAssets/carbon-ibm-z-environments-dev-sec-ops.svg"
                />
                <h2 className="font-extrabold text-[#dff1fd] text-2xl lg:text-3xl mb-4 tracking-wider">
                  IT & DevOps
                </h2>
                <div className="space-y-3 text-[#dff1fd] text-sm lg:text-base">
                  <p><span className="font-bold">Zero-Downtime Configuration:</span> Safe, fast migration across all ERP environments.</p>
                  <p><span className="font-bold">Visual Configuration Comparison:</span> Instant detection of Config drift between instances.</p>
                  <p><span className="font-bold">Rapid Custom SQL Development:</span> Securely build and deploy custom reporting and integrations.</p>
                  <p><span className="font-bold">High-Volume Data Conversion:</span> Simplify and accelerate complex ERP data loads.</p>
                </div>
                <Button className="mt-6 bg-white hover:bg-gray-100 text-black rounded-[10px] border border-[#4e8dc0] px-8 py-2.5" data-testid="button-toolkit">
                  Get the Toolkit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#ffffff03] rounded-[40px] p-6 lg:p-12 backdrop-blur-sm border border-white/10 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="font-bold text-white text-4xl lg:text-5xl xl:text-6xl">
                    {stat.value}
                  </div>
                  <div className="font-medium text-white text-base lg:text-lg mt-2 opacity-80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20" id="solutions">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-extrabold text-white text-3xl lg:text-5xl text-center mb-6 tracking-wider">
            Develop SQL: Unlocking Custom Reporting and Data Access in Oracle Fusion
          </h2>
          <p className="text-white text-base lg:text-lg text-center max-w-4xl mx-auto mb-8">
            Accessing necessary data for custom reporting shouldn't require complex workarounds. As a core feature of the Fusion App, Develop SQL gives IT and Business Analysts/Audit Specialists secure, streamlined access to the ERP database. This enables fast development of operational and compliance reports without compromising system stability.
          </p>
          <div className="flex justify-center">
            <Button className="bg-white hover:bg-gray-100 text-black rounded-[10px] border border-[#4e8dc0] px-10 py-2.5" data-testid="button-try-free">
              Try it for Free
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-extrabold text-white text-3xl lg:text-5xl text-center mb-4 tracking-wider">
            Story of Samkit
          </h2>
          <p className="text-white text-base lg:text-lg text-center max-w-4xl mx-auto mb-12">
            Why we developed the solutions, years of experience in the industry, personal journey and background
          </p>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              {timelineData.map((item, index) => (
                <div key={index} className="flex-1 w-full md:w-auto">
                  <Card className="bg-white dark:bg-gray-800 rounded-[20px]" data-testid={`timeline-${item.year}`}>
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

      <section className="py-12 lg:py-20" id="events">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-extrabold text-white text-3xl lg:text-5xl text-center mb-12 tracking-wider">
            Webinars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinarData.map((webinar, index) => (
              <div key={index} className="flex flex-col gap-6" data-testid={`webinar-${index}`}>
                <img
                  className="w-full h-auto object-cover rounded-lg"
                  alt={webinar.title}
                  src={webinar.image}
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <Schedule className="w-5 h-5" />
                    <span className="text-sm">{webinar.duration}</span>
                  </div>
                  <h3 className="font-medium text-white text-xl lg:text-2xl">
                    {webinar.title}
                  </h3>
                  <p className="text-white text-sm opacity-80">{webinar.date}</p>
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

      <section className="py-12 lg:py-20" id="news">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-extrabold text-white text-3xl lg:text-5xl text-center mb-12 tracking-wider">
            Blogs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogData.map((blog, index) => (
              <div key={index} className="space-y-4" data-testid={`blog-${index}`}>
                <img
                  className="w-full h-auto object-cover rounded-lg"
                  alt={blog.title}
                  src={blog.image}
                />
                <h3 className="font-semibold text-white text-xl lg:text-2xl">
                  {blog.title}
                </h3>
                <Button className="bg-white hover:bg-gray-100 text-black rounded-[10px] border border-[#4e8dc0] px-6 py-2.5" data-testid={`button-blog-${index}`}>
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="font-normal text-white text-4xl lg:text-6xl">FAQs</h2>
              <p className="text-white text-base lg:text-lg opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
              <Input
                className="border border-white bg-transparent text-white placeholder:text-white/60"
                placeholder="Submit a question"
                data-testid="input-faq-question"
              />
              <Button className="bg-[#015687] hover:bg-[#014570] border border-white text-white" data-testid="button-submit-question">
                Submit
              </Button>
            </div>
            <div className="space-y-8">
              {faqData.map((faq, index) => (
                <div key={index} className="space-y-3" data-testid={`faq-${index}`}>
                  <h3 className="font-normal text-white text-lg">{faq.question}</h3>
                  <p className="text-white text-base opacity-80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-gradient-to-b from-transparent to-[#015687]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#015687] rounded-[20px] p-8 lg:p-12">
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

      <footer className="bg-[#0c0a01] dark:bg-[#0c0a01] border-t border-[#025ca5]">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                className="w-32 lg:w-40 h-auto mb-4"
                alt="Samkit logo"
                src="/figmaAssets/untitled-design--10--2.png"
              />
              <p className="font-light text-white text-sm leading-relaxed">
                Leading Oracle software implementation services provider globally.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg mb-4 tracking-wider">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2">
                {footerQuickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-light text-white text-sm hover:text-[#00afe9] transition-colors"
                    data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg mb-4 tracking-wider">
                Solutions
              </h3>
              <div className="flex flex-col gap-2">
                {footerSolutions.map((solution, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-light text-white text-sm hover:text-[#00afe9] transition-colors"
                    data-testid={`link-solution-${index}`}
                  >
                    {solution}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg mb-4 tracking-wider">
                Contact Us
              </h3>
              <div className="flex flex-col gap-2">
                <p className="font-light text-white text-sm leading-relaxed">
                  124 City Road, London EC1V 2NX, UK
                </p>
                <a
                  href="mailto:info@samkit.co.uk"
                  className="font-light text-white text-sm hover:text-[#00afe9] transition-colors"
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

          <Separator className="bg-[#025ca5] mb-6" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-light text-white text-sm">
              © {new Date().getFullYear()} Samkit Infosystems. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-light text-white text-sm hover:text-[#00afe9] transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-light text-white text-sm hover:text-[#00afe9] transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
