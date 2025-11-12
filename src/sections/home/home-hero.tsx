import Link from "next/link";
// components
import Iconify from "@/components/iconify";

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="pt-2 flex flex-col gap-4">
        <h1 className="text-[168px]/32">MOIZ S.</h1>
        <h3 className="ml-3 text-4xl font-light">
          software developer & designer
        </h3>
      </div>

      <Link
        href="/"
        className="w-fit m-4 text-foreground hover:opacity-70 transition-opacity flex items-baseline"
      >
        <div className="text-8xl/18 font-mono">01.</div>
        <div className="text-[64px]/16 uppercase flex items-center">
          Resume
          <Iconify icon="ph:arrow-up-right-thin" className="size-16" />
        </div>
      </Link>
    </div>
  );
}
