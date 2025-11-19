"use client";

import Link from "next/link";
import { useEffect } from "react";

// ----------------------------------------------------------------------

export default function Header() {
  useEffect(() => {
    const showOnScroll = () => {
      const headerClasses = document.getElementById("header")?.classList;

      if (window.scrollY > window.innerHeight) {
        headerClasses?.add("translate-y-0");
      } else {
        headerClasses?.remove("translate-y-0");
      }
    };
    window.addEventListener("scroll", showOnScroll);

    return () => window.removeEventListener("scroll", showOnScroll);
  }, []);

  const LINKS = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Works",
      href: "#works",
    },
    {
      label: "Resume",
      href: "/",
    },
  ];

  return (
    <header
      id="header"
      className="fixed w-full flex items-center justify-between p-2 bg-background -translate-y-full transition-transform z-50"
    >
      <div className="flex">
        {LINKS.map((link, index) => (
          <span key={link.label} className="text-xs uppercase font-light ">
            <Link
              key={link.label}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
            {index < LINKS.length - 1 && <>,&nbsp;</>}
          </span>
        ))}
      </div>

      <p className="text-xs font-sans uppercase font-thin [&>strong]:font-normal">
        <strong>Jasafanar</strong> Workshop
      </p>
    </header>
  );
}
