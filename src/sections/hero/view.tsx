"use client";

import Image from "next/image";
// hooks
import { useResponsive } from "@/hooks/use-responsive";
//
import HeroFooter from "./hero-footer";
import HeroNavigation from "./hero-navigation";

// ----------------------------------------------------------------------

export default function HeroView() {
  const upLg = useResponsive("up", "lg");

  return (
    <section id="hero" className="w-full h-svh flex flex-col">
      <Image
        src={
          upLg
            ? "/assets/hero_brand_name_desktop.svg"
            : "/assets/hero_brand_name_mobile.svg"
        }
        alt="Hero Brand"
        width={1280}
        height={125}
        draggable={false}
        className="lg:-mt-1 w-full h-fit object-top object-cover"
      />

      <div className="hero-background w-full px-2 md:px-4 py-4 grow flex flex-col justify-between">
        <HeroNavigation />

        <HeroFooter />
      </div>
    </section>
  );
}
