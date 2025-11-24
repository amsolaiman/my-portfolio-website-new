"use client";

import Link from "next/link";

// ----------------------------------------------------------------------

export default function HeroNavigation() {
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
    <div className="flex justify-between">
      <div className="flex flex-col gap-2">
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

      <p className="text-xs uppercase font-light">
        {["Frontend Developer", "UI/UX Designer", "Graphic Designer"]
          .map((_) => _)
          .join(" / ")}
      </p>
    </div>
  );
}
