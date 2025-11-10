import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <Image src="/logo/logo_single.png" alt="Logo" width={200} height={200} />
    </div>
  );
}
