import Link from "next/link";

// ----------------------------------------------------------------------

export default function HomeFooter() {
  return (
    <div className="absolute p-6 bottom-0 left-0 right-0">
      <h1 className="absolute inset-0 p-6 text-sm/3 text-center font-extralight uppercase tracking-widest [.&>strong]:font-light">
        Jasafanar <strong>Workshop</strong>
      </h1>

      <div className="relative z-1 flex items-center justify-between">
        <p className="text-sm/3 font-extralight uppercase tracking-widest">
          © {new Date().getFullYear()}
        </p>

        <Link
          href="/"
          className="text-sm/3 font-light uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}
