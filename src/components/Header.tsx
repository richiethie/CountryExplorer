import { Globe } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <header className="backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200/50 dark:border-zinc-700/50 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 lg:py-6">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-3 sm:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
                Country Explorer
              </h1>
            </div>
            <div className="scale-75 origin-right">
              <DarkModeSwitch />
            </div>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
            - Discover the world, one country at a time -
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex-shrink-0">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
                Country Explorer
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Discover the world, one country at a time
              </p>
            </div>
          </div>
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
}