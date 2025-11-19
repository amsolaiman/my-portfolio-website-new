"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
//
import Footer from "./footer";
import Header from "./header";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const footer = document.getElementById("footer");

    if (!footer) return;
    setFooterHeight(footer.offsetHeight);

    const observer = new ResizeObserver(() => {
      setFooterHeight(footer.offsetHeight);
    });
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <ReactLenis root>
      <div
        className="h-full relative"
        style={
          {
            // biome-ignore lint/complexity/useLiteralKeys: false positive
            ["--h-footer"]: `${footerHeight}px`,
          } as React.CSSProperties
        }
      >
        <Header />

        <main className="relative z-1 grow mb-(--h-footer) bg-background">
          {children}
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}
