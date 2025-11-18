import Image from "next/image";
//
import HomeFooter from "../home-footer";
import HomeNavigation from "../home-navigation";

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <section id="home" className="w-full h-svh flex flex-col">
      <Image
        src="/assets/hero_brand_name.svg"
        alt="Hero Brand"
        width={1280}
        height={125}
        draggable={false}
        className="w-full h-fit object-top object-cover"
      />

      <div className="home-background w-full p-4 grow flex flex-col justify-between">
        <HomeNavigation />

        <HomeFooter />
      </div>
    </section>
  );
}
