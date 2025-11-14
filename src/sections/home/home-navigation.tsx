import Link from "next/link";

// ----------------------------------------------------------------------

export default function HomeNavigation() {
  const LINKS = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "Works",
      href: "/works",
    },
  ];

  return (
    <div className="flex gap-20 items-center p-4">
      {LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-lg/4 uppercase tracking-widest font-light hover:opacity-70 transition-opacity"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
