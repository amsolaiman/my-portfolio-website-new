// layout
import Layout from "@/layout";
// sections
import AboutView from "@/sections/about";
import HeroView from "@/sections/hero";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Layout>
      <HeroView />

      <AboutView />
    </Layout>
  );
}
