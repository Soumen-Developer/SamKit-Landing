import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface GlassCardProps extends ComponentProps<"div"> {
  className?: string;
  children: React.ReactNode;
}

export const GlassCard = ({ className, children, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative backdrop-blur-md bg-white/10 dark:bg-black/10",
        "border border-white/20 dark:border-white/10",
        "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
        "rounded-xl p-6",
        "hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.47)]",
        "transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
