import type { Metadata } from "next";
import { Abel, Alexandria } from "next/font/google";
// styles
import "./globals.css";

// ----------------------------------------------------------------------

const fontSans = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});

const fontMono = Abel({
  variable: "--font-abel",
  subsets: ["latin"],
  weight: "400",
});

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: "jasafanar portfolio",
  description:
    "Official portfolio website of Abdul Moiz Solaiman, software developer & designer based in the Philippines.",
  icons: [
    {
      rel: "icon",
      url: "/favicon/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
