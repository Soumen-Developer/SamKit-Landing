import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={`relative flex items-center w-[104px] h-[52px] rounded-full p-1 cursor-pointer transition-colors duration-300 backdrop-blur-xl border ${
        theme === "light"
          ? "bg-white/20 border-black shadow-white shadow-md"
          : "bg-white/10 border-white/80 shadow-black shadow-md"
      }`}
      data-testid="button-theme-toggle"
    >
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md transition-transform duration-300 ${
          theme === "dark" ? "translate-x-0" : "translate-x-[52px]"
        }`}
      />
      <div className="flex justify-around w-full">
        <Moon
          className={`h-6 w-6 z-10 transition-colors duration-300 ${
            theme === "dark" ? "text-blue-500" : "text-gray-400"
          }`}
        />
        <Sun
          className={`h-6 w-6 z-10 transition-colors duration-300 ${
            theme === "light" ? "text-yellow-500" : "text-gray-400"
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
