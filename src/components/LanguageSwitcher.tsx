"use client";

import {useState, useRef, useEffect} from "react";
import {useLocale} from "next-intl";

const LOCALES = [
  {code: "en", name: "English"},
  {code: "bg", name: "Български"},
  {code: "es", name: "Español"},
  {code: "de", name: "Deutsch"},
  {code: "it", name: "Italiano"},
  {code: "fr", name: "Français"},
  {code: "zh", name: "中文"},
  {code: "ja", name: "日本語"},
  {code: "hi", name: "हिन्दी"},
  {code: "ru", name: "Русский"},
] as const;

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    // Replace the current locale segment in the actual URL — works under any basePath
    // and is reliable for sequential switches (no stale state from usePathname).
    window.location.href = window.location.pathname.replace(
      `/${locale}/`,
      `/${newLocale}/`,
    );
    setOpen(false);
  }

  const current = LOCALES.find((l) => l.code === locale);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-zinc-800/60"
        aria-label="Change language"
        aria-expanded={open}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{current?.name ?? locale}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 3.5l3 3 3-3" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-44 rounded-xl border border-zinc-700 bg-zinc-900 shadow-xl overflow-hidden z-50 py-1">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                l.code === locale
                  ? "text-white bg-zinc-800"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
