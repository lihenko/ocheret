"use client";
import { useState, useEffect } from "react";
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function ToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-green-600 text-white shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"
      } hover:bg-green-700`}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
}
