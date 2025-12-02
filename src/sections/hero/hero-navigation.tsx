"use client";

import Link from "next/link";

// ----------------------------------------------------------------------

export default function HeroNavigation() {
  const ROLES = ["Frontend Developer", "UI/UX Designer", "Graphic Designer"];

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
      href: "#work",
    },
  ];

  return (
    <div className="flex justify-between items-start">
      <div className="hidden md:flex flex-col gap-2">
        {LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={(e) => {
              if (link.href.startsWith("#")) {
                const id = link.href.substring(1);

                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="text-xs uppercase font-light hover:opacity-70 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button
        type="button"
        className="cursor-pointer md:hidden text-xs uppercase font-light hover:opacity-70 transition-opacity"
      >
        Menu
      </button>

      <p className="hidden md:block text-xs uppercase font-light">
        {ROLES.map((_) => _).join(" / ")}
      </p>

      <div className="flex md:hidden flex-col items-end gap-2">
        {ROLES.map((_) => (
          <p key={_} className="text-xs uppercase font-light">
            {_}
          </p>
        ))}
      </div>
    </div>
  );
}
