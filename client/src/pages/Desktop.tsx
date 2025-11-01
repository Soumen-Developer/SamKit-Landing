import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

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
    title: "Enhancing Your Oracle ERP\nWorkflows",
    date: "Date:28/10/2025, Time: 10:00 am PST",
    buttonText: "Register Now!",
  },
  {
    image:
      "/figmaAssets/fast-tracking-your-oracle-erp-report-development-1.png",
    duration: "45 mins",
    title: "Fast Tracking Your Oracle ERP\nDevelopment Webinar",
    date: "Date:28/10/2025, Time: 10:00 am PST",
    buttonText: "Watch Now",
  },
  {
    image:
      "/figmaAssets/streamlining-risk-assessment-in-oracle-erp-cloud-1536x864-1.png",
    duration: "45 mins",
    title: "Streamlinig Risk Assessment In Oracle ERP Cloud",
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
      'It\'s recommended that organisations run CRA on a predefined schedule—monthly, quarterly, or annually—depending on their size and the frequency of configuration changes This periodic scanning helps prevent "risk creep" from new or shifted settings post go-live. The tool offers:',
  },
  {
    question: "What is the AR Invoice Print Preview tool and how does it help?",
    answer:
      "Samkit's AR Invoice Print Preview is a Windows-based GUI plug-in for Oracle ERP Cloud that lets finance teams generate, preview, and download multiple customer invoices in bulk before sending them out to customers. Instead of manually opening and previewing each invoice one by one, users can apply filters such as Business Unit, Project Number, Contract Number, and Invoice Number to extract hundreds of invoices within minutes. The tool connects via web services to pull invoice data and delivers them straight to your system.",
  },
];

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "News", href: "#" },
  { label: "Events", href: "#" },
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
  "For Security & Complaince",
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-black overflow-hidden w-full min-w-[1440px] min-h-[10503px] relative">
      <div className="absolute top-[7892px] left-12 w-[1348px] h-[472px] bg-[#f8eeee03] rounded-[40px] border-[none] shadow-[inset_10px_4px_4px_#ffffff40,inset_13px_14px_5.9px_#ffffff40,inset_-3px_-10px_4px_#ffffff40,inset_-9px_5px_4px_#ffffff40] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[40px] before:[background:linear-gradient(47deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_51%,rgba(154,154,154,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />

      <div className="flex flex-col w-[1302px] items-center absolute top-36 left-[69px]">
        <div className="relative w-[1302px] h-[865px] bg-[#ffffff03] rounded-[69px] border-[none] shadow-[inset_8px_0px_4px_#ffffff33,inset_4px_2px_5px_#ffffff40,inset_12px_11px_12.3px_#ffffff40,inset_-10px_4px_4.7px_#ffffff33,inset_3px_-11px_4px_#ffffff40] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[69px] before:[background:linear-gradient(246deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_55%,rgba(255,255,255,0.25)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />
      </div>

      <div className="top-[605px] left-[-312px] bg-[linear-gradient(180deg,rgba(1,86,135,1)_0%,rgba(1,86,135,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[1398px] left-44 bg-[linear-gradient(180deg,rgba(1,86,135,1)_0%,rgba(1,86,135,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[361px] left-[957px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[1210px] left-[913px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[7302px] left-[805px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[7302px] left-[-145px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[6223px] left-[789px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[5638px] left-[-98px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[4925px] left-[780px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[6446px] left-[-227px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[4370px] left-[-211px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[3869px] left-[593px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[3558px] left-[-145px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[3147px] left-[749px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[2777px] left-[-275px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[1772px] left-[-359px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[2087px] left-[659px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[7863px] left-[-484px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <div className="top-[8201px] left-[404px] bg-[linear-gradient(180deg,rgba(0,162,180,1)_0%,rgba(75,0,78,1)_100%)] absolute w-[934px] h-[915px] rounded-[467px/457.5px] blur-[250px]" />

      <nav className="absolute top-[35px] left-[428px] w-[605px] h-14 bg-white rounded-[20px] border border-solid border-[#00afe9] flex items-center justify-around px-4">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`${
              link.active
                ? "bg-[#015687] text-white px-5 py-2 rounded-[10px]"
                : "text-[#0c0a01]"
            } [font-family:'Inter',Helvetica] font-medium text-xl tracking-[0.20px] leading-[24.0px]`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <img
        className="absolute top-[35px] left-[69px] w-[165px] h-14"
        alt="Untitled design"
        src="/figmaAssets/untitled-design--10--1.png"
      />

      <Button className="absolute top-[34px] left-[1206px] w-[166px] h-[58px] bg-[#015687] rounded-[5px] flex items-center gap-[11px] px-[18px] h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xl tracking-[1.00px] leading-[24.0px]">
          Register
        </span>
        <img
          className="w-[38.77px] h-[38.77px]"
          alt="Ph arrow up bold"
          src="/figmaAssets/ph-arrow-up-bold.svg"
        />
      </Button>

      <Button className="absolute top-[8117px] left-[101px] w-[175px] h-11 bg-white rounded-[15px] flex items-center gap-[0.5px] px-[13.5px] h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#025ca5] text-[15px] tracking-[0.75px] leading-[18.0px]">
          Book a meeting
        </span>
        <img
          className="w-[29.07px] h-[29.07px]"
          alt="Ph arrow up bold"
          src="/figmaAssets/ph-arrow-up-bold.svg"
        />
      </Button>

      <Button className="absolute top-[498px] left-[1332px] w-[161px] h-[58px] bg-white rounded-[5px] -rotate-90 flex items-center px-[18px] h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[1.00px] leading-[24.0px]">
          Book a Call
        </span>
      </Button>

      <h1 className="absolute top-[187px] left-[calc(50.00%_-_645px)] w-[1290px] [font-family:'Inter',Helvetica] font-semibold text-white text-[80px] text-center tracking-[0.80px] leading-[96.0px]">
        Fusion App for
      </h1>

      <h1 className="absolute top-[284px] left-[calc(50.00%_-_651px)] w-[1290px] [font-family:'Inter',Helvetica] font-semibold text-white text-[80px] text-center tracking-[0.80px] leading-[96.0px]">
        Faster Audits
      </h1>

      <Card className="absolute top-[1073px] left-[71px] w-[407px] h-[618px] bg-[#0c0a01] rounded-[15px] shadow-[-9px_5px_28px_#455969]">
        <CardContent className="p-0 h-full" />
      </Card>

      <Card className="absolute top-[1072px] left-[517px] w-[407px] h-[619px] bg-black rounded-[15px] shadow-[-9px_5px_28px_#455969]">
        <CardContent className="p-0 h-full" />
      </Card>

      <Card className="absolute top-[1073px] left-[964px] w-[407px] h-[618px] bg-[#0c0a01] rounded-[15px] shadow-[-9px_5px_28px_#455969]">
        <CardContent className="p-0 h-full" />
      </Card>

      <p className="absolute top-[376px] left-[calc(50.00%_-_605px)] w-[1226px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[38.4px]">
        Your single integrated platform for Oracle Fusion GRC, Audit, and DevOps
        Unify user controls (SoD).Config Snapshots, and GoBD reporting. Achieve
        total control and agility.
      </p>

      <Button className="absolute top-[489px] left-[512px] bg-white rounded-[10px] border border-solid border-[#025ca5] shadow-[0px_5px_2.9px_#00000040] px-10 py-2.5 h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#0c0a01] text-xl tracking-[0.20px] leading-[24.0px]">
          Free Trail
        </span>
      </Button>

      <Button className="absolute top-[489px] left-[728px] bg-[#015687] rounded-[10px] border border-solid border-[#025ca5] shadow-[0px_5px_2.9px_#00000040] px-10 py-2.5 h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xl tracking-[0.20px] leading-[24.0px]">
          Demo
        </span>
      </Button>

      <Button className="absolute top-[1602px] left-[93px] bg-white rounded-[10px] border border-solid border-[#4e8dc0] px-10 py-2.5 h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#0c0a01] text-xl tracking-[0.20px] leading-[24.0px]">
          Get Audit Ready
        </span>
      </Button>

      <Button className="absolute top-[1602px] left-[550px] bg-white rounded-[10px] border border-solid border-[#4e8dc0] px-10 py-2.5 h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#0c0a01] text-xl tracking-[0.20px] leading-[24.0px]">
          Schedule a Risk Assessment
        </span>
      </Button>

      <Button className="absolute top-[1602px] left-[1003px] bg-white rounded-[10px] border border-solid border-[#4e8dc0] px-[17.5px] py-2.5 h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#0c0a01] text-xl tracking-[0.20px] leading-[24.0px]">
          Get the Toolkit
        </span>
      </Button>

      <Button className="absolute top-[2282px] left-[599px] bg-white rounded-[10px] border border-solid border-[#4e8dc0] px-[27px] py-2.5 h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#0c0a01] text-xl tracking-[0.20px] leading-[24.0px]">
          Try it for Free
        </span>
      </Button>

      <Button className="absolute top-[5361px] left-[45px] bg-white rounded-[10px] border border-solid border-[#4e8dc0] px-[19px] py-2.5 h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#0c0a01] text-xl tracking-[0.20px] leading-[24.0px]">
          Read More.
        </span>
      </Button>

      <Button className="absolute top-[5361px] left-[723px] bg-white rounded-[10px] border border-solid border-[#4e8dc0] px-[19px] py-2.5 h-auto">
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#0c0a01] text-xl tracking-[0.20px] leading-[24.0px]">
          Read More.
        </span>
      </Button>

      <h2 className="absolute top-[1174px] left-[93px] [font-family:'Inter',Helvetica] font-extrabold text-[#dff1fd] text-4xl tracking-[5.04px] leading-[50.4px] whitespace-nowrap">
        Finance &amp; Audit
      </h2>

      <h2 className="absolute top-[2033px] left-[215px] w-[953px] [font-family:'Inter',Helvetica] font-extrabold text-white text-4xl text-center tracking-[5.04px] leading-[50.4px]">
        Develop SQL: Unlocking Custom Reporting and Data Access in Oracle Fusion
      </h2>

      <h2 className="absolute top-[3569px] left-[calc(50.00%_-_476px)] w-[953px] [font-family:'Inter',Helvetica] font-extrabold text-white text-5xl text-center tracking-[6.72px] leading-[67.2px]">
        Story of Samkit
      </h2>

      <h2 className="absolute top-[4070px] left-[calc(50.00%_-_999px)] w-[953px] [font-family:'Inter',Helvetica] font-extrabold text-white text-5xl text-center tracking-[6.72px] leading-[67.2px]">
        Webinars
      </h2>

      <h2 className="absolute top-[4749px] left-[calc(50.00%_-_1056px)] w-[953px] [font-family:'Inter',Helvetica] font-extrabold text-white text-5xl text-center tracking-[6.72px] leading-[67.2px]">
        Blogs
      </h2>

      <p className="absolute top-[2151px] left-[215px] w-[953px] [font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[28.8px]">
        Accessing necessary data for custom reporting shouldn&#39;t require
        complex workarounds. As a core feature of the Fusion App, Develop SQL
        gives IT and Business Analysts/Audit Specialists secure, streamlined
        access to the ERP database. This enables fast development of operational
        and compliance reports without compromising system stability.
      </p>

      <p className="absolute top-[3631px] left-[244px] w-[953px] [font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[28.8px]">
        Why developed the solutions, years of experience in the industry,
        personal journey and background
      </p>

      <p className="absolute top-[5273px] left-[50px] w-[616px] [font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[38.4px]">
        Best Practices in Selecting a Partner for ERP Implementation
      </p>

      <p className="absolute top-[5273px] left-[728px] w-[660px] [font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[38.4px]">
        Choosing the Right ERP: Top 5 Factors to Consider
      </p>

      <img
        className="absolute top-[4828px] left-[45px] w-[643px] h-[415px]"
        alt="Placeholder"
        src="/figmaAssets/placeholder-1.png"
      />

      <h2 className="absolute top-[1174px] left-[553px] [font-family:'Inter',Helvetica] font-extrabold text-[#dff1fd] text-4xl tracking-[5.04px] leading-[50.4px] whitespace-nowrap">
        GRC &amp; Security
      </h2>

      <h2 className="absolute top-[1174px] left-[1003px] [font-family:'Inter',Helvetica] font-extrabold text-[#dff1fd] text-4xl tracking-[5.04px] leading-[50.4px] whitespace-nowrap">
        IT &amp; DevOps
      </h2>

      <div className="absolute top-[1239px] left-[83px] w-[357px] [font-family:'Inter',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-[26.4px]">
        <span className="font-bold text-[#dff1fd]">
          Guaranteed Audit Readiness:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Certified GoBD and regulatory reporting.
          <br />
        </span>
        <span className="font-bold text-[#dff1fd]">
          Accelerated Month-End:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Instant access to ARsupporting documents and previews.
          <br />
        </span>
        <span className="font-bold text-[#dff1fd]">
          Financial Data Integrity:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Ensure data quality and accuracy across all financial modules.
          <br />
        </span>
        <span className="font-bold text-[#dff1fd]">
          Streamlined Data Migration:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Accurate conversion of historical financial data
        </span>
      </div>

      <div className="absolute top-[1239px] left-[539px] w-[357px] [font-family:'Inter',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-[26.4px]">
        <span className="font-bold text-[#dff1fd]">
          Real-Time SoD Enforcement:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Automated segregation of duties checks on all users.
          <br />
        </span>
        <span className="font-bold text-[#dff1fd]">
          Proactive Risk Scoring:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Automated configuration scanning using Config Snapshots
          <br />
        </span>
        <span className="font-bold text-[#dff1fd]">
          Holistic User Access Control:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Full visibility into user roles, access, and privilege inheritance.
          <br />
        </span>
        <span className="font-bold text-[#dff1fd]">
          Continuous Security Monitoring:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Proactive alerts on policy violations and risk exposure.
        </span>
      </div>

      <div className="absolute top-[1239px] left-[989px] w-[357px] [font-family:'Inter',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-[26.4px]">
        <span className="font-bold text-[#dff1fd]">
          Zero-Downtime Configuration:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Safe, fast migration across all ERP environments.
          <br />
        </span>
        <span className="font-bold text-[#dff1fd]">
          Visual Configuration Comparison:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Instant detection of Config drift between instances.
          <br />
        </span>
        <span className="font-bold text-[#dff1fd]">
          Rapid Custom SQL Development:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Securely build and deploy custom reporting and integrations.
          <br />
        </span>
        <span className="font-bold text-[#dff1fd]">
          High-Volume Data Conversion:{" "}
        </span>
        <span className="text-[#dff1fd]">
          Simplify and accelerate complex ERP data loads
        </span>
      </div>

      <img
        className="absolute top-[1094px] left-[93px] w-20 h-20"
        alt="Arcticons mi finance"
        src="/figmaAssets/arcticons-mi-finance.svg"
      />

      <img
        className="absolute top-[1087px] left-[539px] w-[94px] h-[94px]"
        alt="Arcticons dfndr"
        src="/figmaAssets/arcticons-dfndr-security.svg"
      />

      <img
        className="absolute top-[1095px] left-[1003px] w-[75px] h-[75px]"
        alt="Carbon ibm z"
        src="/figmaAssets/carbon-ibm-z-environments-dev-sec-ops.svg"
      />

      <img
        className="absolute top-[6823px] left-12 w-[1348px] h-[701px]"
        alt="Element f"
        src="/figmaAssets/360-f-352402122-thjibtkppbm7bt6yyxzciiotchlskhl3-1.png"
      />

      <div className="absolute top-[7012px] left-[584px] w-[778px] h-[579px] bg-[#015687] rounded-[20px]" />

      <h2 className="absolute top-[7048px] left-[calc(50.00%_-_101px)] w-[312px] [font-family:'Inter',Helvetica] font-extrabold text-white text-[40px] text-center tracking-[5.60px] leading-[56px] whitespace-nowrap">
        Contact Us
      </h2>

      <img
        className="absolute top-[564px] left-[calc(50.00%_-_416px)] w-[832px] h-[445px] rounded-[20px_20px_0px_0px] object-cover"
        alt="Fusion app"
        src="/figmaAssets/fusion-app-1.png"
      />

      <h3 className="absolute top-[7946px] left-[calc(50.00%_-_391px)] w-[312px] [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[3.36px] leading-[33.6px]">
        Quick links
      </h3>

      <h3 className="absolute top-[7948px] left-[calc(50.00%_+_201px)] w-[312px] [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[3.36px] leading-[33.6px]">
        Contact Us!
      </h3>

      <h3 className="absolute top-[7946px] left-[calc(50.00%_-_182px)] w-[312px] [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[3.36px] leading-[33.6px]">
        Solutions
      </h3>

      <div className="absolute top-[7985px] left-[calc(50.00%_-_316px)] w-[312px] [font-family:'Inter',Helvetica] font-light text-white text-xl tracking-[2.80px] leading-7">
        {footerQuickLinks.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </div>

      <p className="absolute top-[8005px] left-[calc(50.00%_-_618px)] w-[243px] [font-family:'Inter',Helvetica] font-light text-white text-base tracking-[2.24px] leading-[22.4px]">
        Samkit infosystems is a leading Oracle software implementing services
        provider globally.
      </p>

      <div className="absolute top-[7987px] left-[calc(50.00%_-_96px)] w-[448px] [font-family:'Inter',Helvetica] font-light text-white text-xl tracking-[2.80px] leading-7">
        {footerSolutions.map((solution, index) => (
          <div key={index}>{solution}</div>
        ))}
      </div>

      <p className="absolute top-[7989px] left-[calc(50.00%_+_271px)] w-[448px] [font-family:'Inter',Helvetica] font-light text-white text-base tracking-[2.24px] leading-[22.4px]">
        124 City Road, London EC1V 2NX, UK
      </p>

      <a
        className="absolute top-[8024px] left-[calc(50.00%_+_272px)] w-[448px] [font-family:'Inter',Helvetica] font-light text-white text-base tracking-[2.24px] leading-[22.4px] underline"
        href="mailto:info@samkit.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        info@samkit.co.uk
      </a>

      <img
        className="absolute top-[1715px] left-0.5 w-[1438px] h-[280px]"
        alt="Glass texture"
        src="/figmaAssets/glass-texture.svg"
      />

      <div className="flex w-[1345px] h-[165px] items-center justify-between pl-[93.47px] pr-[115.9px] py-[41.13px] absolute top-[1772px] left-[calc(50.00%_-_672px)] bg-[#ffffff03] rounded-[92.53px] shadow-[inset_7.48px_5.61px_4.58px_#ffffff40,inset_5.61px_4.67px_6.64px_#ffffff40,inset_-10.28px_-6.54px_3.74px_#ffffff1a]">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="inline-flex gap-[7.48px] flex-[0_0_auto] flex-col items-start relative"
          >
            <div className="relative self-stretch mt-[-0.93px] [font-family:'Inter',Helvetica] font-bold text-white text-[48.6px] text-center tracking-[0.49px] leading-[58.3px]">
              {stat.value}
            </div>
            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-white text-[18.7px] text-center tracking-[0] leading-[29.9px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[2712px] left-[60px] w-[1303px] h-[751px] border-[3px] border-solid border-[#025ca5] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),url(..//figmaAssets/placeholder-lightbox.png)_50%_50%_/_cover]" />

      <div className="absolute top-[7140px] left-[635px] w-[310px] h-[57px] flex flex-col justify-end gap-[34.7px]">
        <label className="ml-0 w-[71.96px] h-[20.69px] [font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-5 whitespace-nowrap">
          First Name
        </label>
        <Separator className="ml-0 w-[307.79px] h-px mb-[0.5px] bg-white" />
      </div>

      <div className="absolute top-[7243px] left-[635px] w-[520px] h-[239px] flex flex-col justify-end">
        <label className="ml-0 w-[37.64px] h-[20.69px] mb-[34.7px] [font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-5 whitespace-nowrap">
          Email
        </label>
        <Separator className="w-[307.79px] mb-[135.0px] ml-0 h-px bg-white" />
        <div className="ml-[35.2px] w-[478.97px] h-[20.69px] mb-[6.2px] flex items-center gap-2">
          <Checkbox className="w-4 h-4 border-white" />
          <label className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-5">
            I agree to the privacy policy.
          </label>
        </div>
        <div className="ml-[35.2px] w-[478.97px] h-[20.69px] mb-0 flex items-center gap-2">
          <Checkbox className="w-4 h-4 border-white" />
          <label className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-5">
            I would like to recive news and insights from Samkit Digital.
          </label>
        </div>
      </div>

      <div className="absolute top-[7140px] left-[986px] w-[310px] h-[57px] flex flex-col justify-end gap-[34.7px]">
        <label className="ml-0 w-[71.96px] h-[20.69px] [font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-5 whitespace-nowrap">
          Last Name
        </label>
        <Separator className="ml-0 w-[307.79px] h-px mb-[0.5px] bg-white" />
      </div>

      <div className="absolute top-[7347px] left-[635px] w-[663px] h-[58px] flex flex-col justify-end">
        <label className="ml-0 w-[57.57px] h-[20.69px] mb-[5.6px] [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-white text-xs tracking-[0] leading-5 whitespace-nowrap">
          Message
        </label>
        <div className="ml-0 w-[164.97px] h-[21.07px] mb-[9.0px] [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
          Write your message..
        </div>
        <Separator className="w-[658.75px] mb-[0.5px] ml-0 h-px bg-white" />
      </div>

      <div className="absolute top-[7243px] left-[986px] w-[308px] h-[57px] flex">
        <div className="mt-0 w-[309.79px] h-[56.9px] ml-0 flex flex-col justify-end gap-[35.7px]">
          <label className="ml-[-1.0px] w-[99.64px] h-[20.69px] [-webkit-text-stroke:1px_#ffffff] [font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-5 whitespace-nowrap">
            Phone Number
          </label>
          <Separator className="ml-0 w-[307.79px] h-px mb-[0.5px] bg-white" />
        </div>
      </div>

      <Button className="absolute left-[1063px] bottom-[2948px] bg-white rounded-[22.5px] shadow-[0px_0px_14px_#0000001f] px-12 py-[15px] h-auto">
        <span className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[#025ca5] text-base text-center tracking-[0] leading-[normal]">
          Send Message
        </span>
      </Button>

      {[79, 335, 591, 847, 1103].map((leftPos, index) => (
        <div
          key={index}
          className="flex w-64 items-center justify-center gap-2 absolute top-[3704px]"
          style={{ left: `${leftPos}px` }}
        >
          <div className="relative flex-1 grow h-[3px] bg-white" />
          <div className="relative w-[15px] h-[15px] bg-white rounded-[7.5px]" />
          <div className="relative flex-1 grow h-[3px] bg-white" />
        </div>
      ))}

      {timelineData.map((item, index) => {
        const leftPositions = [113, 369, 627, 881, 1139];
        return (
          <Card
            key={index}
            className="absolute top-[3744px] w-[188px] h-[218px] bg-white rounded-[20px] overflow-hidden"
            style={{ left: `${leftPositions[index]}px` }}
          >
            <CardContent className="flex items-center justify-center gap-2 px-2 py-0 h-full">
              <div className="flex flex-col items-center justify-center gap-2 w-full">
                <div className="relative self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#0c0a01] text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                  {item.year}
                </div>
                <div className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#0c0a01] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  {item.description}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}

      {webinarData.map((webinar, index) => {
        const leftPositions = [58, 524, 994];
        const topPositions = [4167, 4431, 4433];
        return (
          <div
            key={index}
            className="flex flex-col w-[405px] items-start gap-6 absolute"
            style={{
              top: `${topPositions[index]}px`,
              left: `${leftPositions[index]}px`,
            }}
          >
            {index === 0 && (
              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[405.33px] h-[236px] object-cover"
                  alt="Webinar thumbnail"
                  src={webinar.image}
                />
              </div>
            )}
            <div className="items-start gap-4 relative self-stretch w-full flex-[0_0_auto] flex flex-col">
              <div className="items-start gap-4 relative self-stretch w-full flex-[0_0_auto] flex flex-col">
                <div className="flex flex-wrap items-center gap-[16px_16px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Schedule"
                      src="/figmaAssets/schedule.svg"
                    />
                    <div className="relative w-fit font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-white text-[length:var(--text-small-normal-font-size)] text-center tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
                      {webinar.duration}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[28px] tracking-[0.28px] leading-[39.2px] whitespace-pre-line">
                    {webinar.title}
                  </div>
                  <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[25.6px]">
                    {webinar.date}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 pt-2 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                <Button className="bg-[#2270b0] rounded-[15px] px-2 py-4 flex items-center justify-center gap-2 h-auto">
                  <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {webinar.buttonText}
                  </span>
                  <img
                    className="relative w-6 h-6"
                    alt="Chevron right"
                    src="/figmaAssets/chevron-right.svg"
                  />
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="gap-6 top-[4168px] left-[991px] flex flex-col w-[405px] items-start absolute">
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[405px] h-[228px] object-cover"
            alt="Streamlining risk"
            src="/figmaAssets/streamlining-risk-assessment-in-oracle-erp-cloud-1536x864-1.png"
          />
        </div>
      </div>

      <img
        className="absolute top-[4828px] left-[723px] w-[665px] h-[415px]"
        alt="Placeholder"
        src="/figmaAssets/placeholder-1-1.png"
      />

      <img
        className="absolute top-[4167px] left-[513px] w-[420px] h-[236px] object-cover"
        alt="Fast tracking your"
        src="/figmaAssets/fast-tracking-your-oracle-erp-report-development-1.png"
      />

      <img
        className="absolute top-[7937px] left-[102px] w-[135px] h-[46px]"
        alt="Untitled design"
        src="/figmaAssets/untitled-design--10--2.png"
      />

      <section className="flex w-[1280px] items-start gap-20 absolute top-[5617px] left-[calc(50.00%_-_640px)]">
        <div className="flex flex-col w-[500px] items-start gap-8 relative">
          <div className="items-start gap-6 relative self-stretch w-full flex-[0_0_auto] flex flex-col">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[102.4px]">
              FAQs
            </h2>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0] leading-[28.8px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <Input
            className="w-[262px] h-[52px] border border-solid border-white bg-transparent text-white placeholder:text-white"
            placeholder="Submit a question"
          />
          <Button className="bg-[#015687] border border-solid border-white px-6 py-3 h-auto">
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[25.6px]">
              Submit
            </span>
          </Button>
        </div>
        <div className="flex gap-12 flex-1 grow flex-col items-start relative">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="flex items-start gap-4 self-stretch w-full flex-col relative flex-[0_0_auto]"
            >
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0] leading-[28.8px]">
                {faq.question}
              </h3>
              <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0] leading-[28.8px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <img
        className="absolute top-[37px] left-[1073px] w-[104px] h-[52px]"
        alt="Frame"
        src="/figmaAssets/frame-31.svg"
      />

      <img
        className="absolute top-[8064px] left-[992px] w-[22px] h-[23px] object-cover"
        alt="Vector"
        src="/figmaAssets/vector-5-1.png"
      />

      <img
        className="absolute top-[8064px] left-[1030px] w-[23px] h-[23px] object-cover"
        alt="Vector"
        src="/figmaAssets/vector-6-1.png"
      />

      <img
        className="absolute top-[8064px] left-[1069px] w-[23px] h-[23px] object-cover"
        alt="Vector"
        src="/figmaAssets/vector-7-1.png"
      />
    </div>
  );
};
