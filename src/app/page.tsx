// layout
import Layout from "@/layout";
// sections
import AboutView from "@/sections/about";
import HeroView from "@/sections/hero/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Layout>
      <HeroView />

      <AboutView />
    </Layout>
  );
}
