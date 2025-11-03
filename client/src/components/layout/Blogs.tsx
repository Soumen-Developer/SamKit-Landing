import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export const Blogs = () => {
  const blogsRef = useRef<HTMLDivElement>(null);

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

  return (
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
  );
};