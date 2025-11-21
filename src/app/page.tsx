// layout
import Layout from "@/layout";
// sections
import AboutView from "@/sections/about";
import HeroView from "@/sections/hero";
import PrefooterView from "@/sections/prefooter";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Layout>
      <HeroView />

      <AboutView />

      <PrefooterView />
    </Layout>
  );
}
