"use client";

import { ReactLenis } from "lenis/react";
//
import Header from "./header";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <ReactLenis root>
      <div className="h-full">
        <Header />

        <main className="grow">{children}</main>
      </div>
    </ReactLenis>
  );
}
