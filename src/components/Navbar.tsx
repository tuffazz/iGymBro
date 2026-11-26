"use client";

import {useState, useEffect} from "react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const APP_STORE_URL = "https://apps.apple.com/app/igymbroapp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-white hover:opacity-80 transition-opacity"
        >
          <span
            className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-black text-sm"
            style={{background: "linear-gradient(135deg, #007AFF, #0A84FF)"}}
          >
            G
          </span>
          <span>iGymBro</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/privacy"
            className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors"
          >
            {t("privacy")}
          </Link>
          <LanguageSwitcher />
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{background: "linear-gradient(135deg, #007AFF, #0A84FF)"}}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 814 1000"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-98.8-96.4-166.1-96.4-271.2c0-193.3 125.4-295.5 248.2-295.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
            </svg>
            {t("download")}
          </a>
        </div>
      </nav>
    </header>
  );
}
