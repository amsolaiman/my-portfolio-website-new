"use client";

import Image from "next/image";
import Link from "next/link";
// hooks
import { useResponsive } from "@/hooks/use-responsive";

// ----------------------------------------------------------------------

export default function PrefooterView() {
  const upMd = useResponsive("up", "md");

  const SOCIALS = [
    {
      label: "Github",
      href: "https://github.com/",
    },
    {
      label: "Telegram",
      href: "https://telegram.org/",
    },
    {
      label: "Steam",
      href: "https://store.steampowered.com/",
    },
  ];

  return (
    <section
      id="prefooter"
      className="px-2 md:px-4 pb-4 pt-10 flex flex-col gap-2"
    >
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
        <p className="text-xs font-light uppercase opacity-50">Too much info</p>

        <div className="flex gap-3">
          <p className="text-xs font-light uppercase ">
            [Let's connect{upMd && " & have fun"}]
          </p>

          <div className="flex opacity-50">
            {SOCIALS.map((link, index) => (
              <span key={link.label} className="text-xs uppercase font-light ">
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
                {index < SOCIALS.length - 1 && <>&nbsp;|&nbsp;</>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Image
        src="/assets/prefooter_mailto_barcode.svg"
        alt="Hero Brand"
        width={1248}
        height={60}
        draggable={false}
        className="w-full h-fit object-top object-cover"
      />
    </section>
  );
}
