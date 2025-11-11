import HomeHero from "@/sections/home/home-hero";

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <div className="w-full h-full grid grid-cols-1 xl:grid-cols-10">
      <section className="xl:col-span-6">
        <HomeHero />
      </section>
    </div>
  );
}
