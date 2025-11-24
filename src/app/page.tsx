// layout
import Layout from "@/layout";
// sections
import AboutView from "@/sections/about";
import ExperienceView from "@/sections/experience/view";
import HeroView from "@/sections/hero";
import PrefooterView from "@/sections/prefooter";
import QuoteView from "@/sections/quote";
import WorkView from "@/sections/work";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Layout>
      <HeroView />

      <AboutView />

      <ExperienceView />

      <QuoteView />

      <WorkView />

      <PrefooterView />
    </Layout>
  );
}
