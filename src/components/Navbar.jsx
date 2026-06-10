import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinkClass = ({ isActive }) =>
    `relative transition-all duration-300 ${
      isActive
        ? "text-cyan-500"
        : "text-slate-600 dark:text-slate-300 hover:text-cyan-500"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}

        <NavLink
          to="/"
          className="flex items-center gap-2"
        >
          <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-green-500 p-2 text-white">
            <Sparkles size={18} />
          </div>

          <div>
            <h1 className="font-black text-slate-900 dark:text-white">
              AI Career
            </h1>

            <p className="text-xs text-slate-500">
              Roadmap
            </p>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}

        <nav className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/roadmap"
            className={navLinkClass}
          >
            Roadmap
          </NavLink>

          <NavLink
            to="/profile"
            className={navLinkClass}
          >
            Profile
          </NavLink>

        </nav>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-3">

          {/* THEME BUTTON */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-xl border border-slate-300 p-2 transition hover:scale-105 dark:border-slate-700"
          >
            {darkMode ? (
              <Sun
                size={18}
                className="text-yellow-400"
              />
            ) : (
              <Moon
                size={18}
                className="text-slate-700"
              />
            )}
          </button>

          {/* START BUTTON */}

          <NavLink
            to="/roadmap"
            className="hidden rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600 md:block"
          >
            Start Learning
          </NavLink>

          {/* MOBILE MENU */}

          <button
            className="md:hidden"
            onClick={() =>
              setIsOpen(!isOpen)
            }
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

      </div>

      {/* MOBILE NAVIGATION */}

      {isOpen && (
        <div className="border-t border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950 md:hidden">

          <nav className="flex flex-col gap-4">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() =>
                setIsOpen(false)
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/roadmap"
              className={navLinkClass}
              onClick={() =>
                setIsOpen(false)
              }
            >
              Roadmap
            </NavLink>

            <NavLink
              to="/profile"
              className={navLinkClass}
              onClick={() =>
                setIsOpen(false)
              }
            >
              Profile
            </NavLink>

            <NavLink
              to="/roadmap"
              className="mt-2 rounded-xl bg-cyan-500 px-4 py-3 text-center font-semibold text-white"
            >
              Start Learning
            </NavLink>

          </nav>

        </div>
      )}

    </header>
  );
}