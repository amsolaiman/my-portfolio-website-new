import Link from "next/link";
// components
import Iconify from "@/components/iconify";

// ----------------------------------------------------------------------

export default function HomeContact() {
  const LINKS = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: "fa-brands:linkedin-in",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      icon: "fa-brands:github",
    },
    {
      name: "Telegram",
      url: "https://telegram.org/",
      icon: "lineicons:telegram",
    },
    {
      name: "View More",
      url: "/",
      icon: "ph:plus-thin",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center gap-12 bg-foreground p-8">
      {LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-background hover:opacity-70 transition-opacity"
        >
          <Iconify icon={link.icon} className="size-16" />
        </Link>
      ))}
    </div>
  );
}
