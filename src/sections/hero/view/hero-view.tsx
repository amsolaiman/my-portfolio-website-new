import Image from "next/image";
//
import HeroFooter from "../hero-footer";
import HeroNavigation from "../hero-navigation";

// ----------------------------------------------------------------------

export default function HeroView() {
  return (
    <section id="hero" className="w-full h-svh flex flex-col">
      <Image
        src="/assets/hero_brand_name.svg"
        alt="Hero Brand"
        width={1280}
        height={125}
        draggable={false}
        className="-mt-1 w-full h-fit object-top object-cover"
      />

      <div className="hero-background w-full p-4 grow flex flex-col justify-between">
        <HeroNavigation />

        <HeroFooter />
      </div>
    </section>
  );
}
