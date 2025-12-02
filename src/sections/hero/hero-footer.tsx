import Link from "next/link";

// ----------------------------------------------------------------------

export default function HeroFooter() {
  return (
    <div className="flex items-center justify-center md:justify-between">
      <p className="text-xs font-light uppercase opacity-50">Scoll down</p>

      <Link
        href="/"
        className="hidden md:block text-xs font-light uppercase hover:opacity-70 transition-opacity"
      >
        Download Resume
      </Link>
    </div>
  );
}
