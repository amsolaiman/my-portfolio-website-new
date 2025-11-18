// layout
import Layout from "@/layout";
// sections
import HeroView from "@/sections/hero/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Layout>
      <HeroView />

      <div className="h-[200vh]" />
    </Layout>
  );
}
