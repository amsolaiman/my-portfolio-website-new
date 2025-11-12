import Link from "next/link";

// ----------------------------------------------------------------------

export default function HomeProject() {
  return (
    <div className="w-full h-3/10 flex flex-col justify-end bg-secondary p-2">
      <Link
        href="/"
        className="hover:opacity-70 transition-opacity flex flex-col w-fit"
      >
        <div className="text-[80px]/18 font-mono">03.</div>
        <div className="text-[56px]/12 uppercase">Projects</div>
      </Link>
    </div>
  );
}
