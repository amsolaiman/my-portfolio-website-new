// layout
import Layout from "@/layout";
// sections
import AboutView from "@/sections/about";
import ExperienceView from "@/sections/experience/view";
import HeroView from "@/sections/hero";
import PrefooterView from "@/sections/prefooter";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Layout>
      <HeroView />

      <AboutView />

      <ExperienceView />

      <PrefooterView />
    </Layout>
  );
}
