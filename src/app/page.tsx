// layout
import Layout from "@/layout";
// sections
import HomeView from "@/sections/home/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Layout>
      <HomeView />

      <div className="h-[200vh]" />
    </Layout>
  );
}
