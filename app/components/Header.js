"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [state, setState] = useState("default");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y < 200) {
        setState("default");
      } else if (y >= 200 && y < 350) {
        setState("hidden");
      } else {
        setState("visible");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);
  return (
    <header
      className={`
        w-full z-50
        transition-transform duration-800 ease-in-out
        ${
          state === "default"
            ? "relative translate-y-0"
            : "fixed top-0 left-0"
        }
        ${
          state === "hidden"
            ? "-translate-y-full"
            : state === "visible"
            ? "translate-y-0"
            : ""
        }
        bg-green-800 shadow
      `}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Логотип */}
        <Link href="/">
          <span className="text-2xl font-bold flex items-center gap-2">
            🌾 Очерет
          </span>
        </Link>

        {/* Навігація */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link href="/kamianske/remont-pid-kluch" className="hover:text-yellow-300">
                Кам’янське
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300">
                Про нас
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>

          {/* BURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-6"
            aria-label="Menu"
          >
            <span
              className={`absolute left-0 top-0 h-[3px] w-full bg-white transition-all
                ${mobileOpen ? "rotate-45 top-1/2" : ""}`}
            />
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-full bg-white transition-all
                ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[3px] w-full bg-white transition-all
                ${mobileOpen ? "-rotate-45 top-1/2" : ""}`}
            />
          </button>
      </div>
    </header>
  );
}
