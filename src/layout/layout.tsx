"use client";

//
import Header from "./header";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="h-full">
      <Header />

      <main className="grow">{children}</main>
    </div>
  );
}
