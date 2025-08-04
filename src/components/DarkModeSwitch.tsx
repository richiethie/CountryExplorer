import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeSwitch() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-200 hidden sm:block">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
      <button
        onClick={() => setIsDark(!isDark)}
        className={`relative inline-flex items-center w-16 h-8 rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 shadow-sm hover:shadow-md ${
          isDark 
            ? 'bg-blue-500/20 dark:bg-blue-400/20 border border-blue-300/50 dark:border-blue-400/50' 
            : 'bg-amber-400/20 border border-amber-300/50'
        }`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        role="switch"
        aria-checked={isDark}
      >
      {/* Track Background */}
      <div className="absolute inset-0 rounded-full bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm"></div>
      
      {/* Sliding Toggle */}
      <div
        className={`relative z-10 inline-block w-6 h-6 bg-white dark:bg-zinc-800 rounded-full shadow-lg transform transition-all duration-300 ease-out border border-zinc-200/50 dark:border-zinc-700/50 ${
          isDark ? 'translate-x-8' : 'translate-x-1'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Sun Icon */}
          <Sun 
            className={`absolute w-3.5 h-3.5 text-amber-500 transition-all duration-200 ${
              isDark 
                ? 'opacity-0 rotate-180 scale-50' 
                : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          
          {/* Moon Icon */}
          <Moon 
            className={`absolute w-3.5 h-3.5 text-blue-500 transition-all duration-200 ${
              isDark 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 -rotate-180 scale-50'
            }`}
          />
        </div>
              </div>
      </button>
    </div>
  );
}