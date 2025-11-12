import Link from "next/link";

// ----------------------------------------------------------------------

export default function HomeAbout() {
  return (
    <div className="w-full h-7/10 bg-primary p-4">
      <Link
        href="/"
        className="text-background hover:opacity-70 transition-opacity flex flex-col w-fit"
      >
        <div className="text-8xl/24 font-mono">02.</div>
        <div className="text-8xl/20 uppercase origin-top-left rotate-90 translate-x-20">
          About
        </div>
      </Link>
    </div>
  );
}
