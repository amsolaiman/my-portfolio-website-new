import HomeFooter from "../home-footer";
import HomeNavigation from "../home-navigation";

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <section
      id="home"
      className="home-background w-full h-svh flex items-center justify-center text-background overflow-hidden"
    >
      <HomeNavigation />

      <HomeFooter />
    </section>
  );
}
