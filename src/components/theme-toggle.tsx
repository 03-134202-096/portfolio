"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 shadow-md transition-all hover:scale-110 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
}
