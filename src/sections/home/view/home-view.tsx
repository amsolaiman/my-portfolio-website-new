import HomeAbout from "../home-about";
import HomeContact from "../home-contact";
import HomeHero from "../home-hero";
import HomeProject from "../home-projects";

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <div className="w-full h-full grid grid-cols-1 xl:grid-cols-10">
      <section className="xl:col-span-6">
        <HomeHero />
      </section>

      <section className="xl:col-span-3 flex flex-col">
        <HomeAbout />

        <HomeProject />
      </section>

      <section>
        <HomeContact />
      </section>
    </div>
  );
}
