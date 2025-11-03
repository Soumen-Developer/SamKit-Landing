import { Button } from "@/components/ui/button";
import { Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WebinarCardProps {
  image: string;
  duration: string;
  title: string;
  date: string;
  buttonText: string;
  index: number;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  buttonClassName?: string;
  onClick?: () => void;
}

export const WebinarCard = ({
  image,
  duration,
  title,
  date,
  buttonText,
  index,
  className,
  imageClassName,
  contentClassName,
  buttonClassName,
  onClick,
}: WebinarCardProps) => {
  return (
    <div
      className={cn(
        "flex-shrink-0 w-[300px] lg:w-auto flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 snap-start",
        "backdrop-blur-md bg-white/10 dark:bg-gray-800/10",
        "border border-white/20 dark:border-gray-700/20",
        "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
        "hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.47)]",
        className
      )}
      data-testid={`webinar-${index}`}
    >
      <div className={cn(
        "relative h-52 overflow-hidden group",
        imageClassName
      )}>
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={title}
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full">
            {duration}
          </span>
        </div>
      </div>
      <div className={cn(
        "p-6 space-y-4 flex-1 flex flex-col",
        "bg-gradient-to-b from-white/5 to-white/10 dark:from-gray-800/5 dark:to-gray-800/10",
        contentClassName
      )}>
        <h3 className="font-bold text-gray-900 dark:text-white text-xl leading-tight flex-1">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          {date}
        </p>
        <Button
          onClick={onClick}
          className={cn(
            "bg-gradient-to-r from-[#2270b0] to-[#1a5a8a] hover:from-[#1a5a8a] hover:to-[#2270b0]",
            "text-white rounded-[15px] w-full",
            "shadow-lg hover:shadow-xl transition-all duration-300",
            "border border-white/10",
            buttonClassName
          )}
          data-testid={`button-webinar-${index}`}
        >
          {buttonText}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};
