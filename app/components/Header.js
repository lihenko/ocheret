"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [state, setState] = useState("default");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y < 300) {
        setState("default");
      } else if (y >= 300 && y < 350) {
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
    <>
    {/* MOBILE MENU */}
      <aside
        className={`
          fixed top-0 left-0 z-40
          h-screen w-screen
          bg-green-900 text-white
          transform transition-transform duration-500 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* автопрокрутка */}
        <div className="h-full overflow-y-auto p-8 pt-40">
          <ul className="flex flex-col gap-6 text-xl">
            <li><Link onClick={() => setMobileOpen(false)} href="/" className="text-white">Головна</Link></li>
            <li><Link onClick={() => setMobileOpen(false)} href="/kamianske" className="text-white">Кам’янське</Link></li>
            <li><Link onClick={() => setMobileOpen(false)} href="/about" className="text-white">Про нас</Link></li>
            <li><Link onClick={() => setMobileOpen(false)} href="/contact" className="text-white">Контакти</Link></li>
          </ul>
        </div>
      </aside>
    <div id="fixed-header"
      className={`
        w-full z-40
        transition-transform duration-500 ease-in-out
        ${
          state === "default"
            ? "duration-0 fixed -translate-y-full"
            : "fixed top-0 left-0"
        }
        ${
          state === "duration-0 hidden"
            ? "-translate-y-full"
            : state === "visible"
            ? "translate-y-0"
            : ""
        }
        bg-brand shadow
      `}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Логотип */}
        <Link href="/">
          <span className="text-2xl font-bold flex items-center gap-2">
            <Image src="/ocheret_logo_white.png" width={150} height={75} alt="Логотип"></Image>
          </span>
        </Link>

        {/* Навігація */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link href="/kamianske" className="text-white hover:text-yellow-300 no-underline">
                Кам’янське
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-yellow-300 no-underline">
                Про нас
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-yellow-300 no-underline">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>

          {/* BURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-6 z-50"
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
    </div>
    <header className="bg-brand relative z-40">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Логотип */}
        <Link href="/" className="no-underline">
          <span className="text-2xl font-bold flex items-center gap-2">
            <Image src="/ocheret_logo_white.png" width={150} height={75} alt="Логотип"></Image>
          </span>
        </Link>

        {/* Навігація */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link href="/kamianske" className="text-white hover:text-yellow-300 no-underline">
                Кам’янське
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-yellow-300 no-underline">
                Про нас
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-yellow-300 no-underline">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>

          {/* BURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-6 z-50"
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
    
    </>
  );
}
