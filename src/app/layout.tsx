import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import localFont from "next/font/local";
// styles
import "./globals.css";

// ----------------------------------------------------------------------

const fontSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/HelveticaNeue100.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/HelveticaNeue200.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/HelveticaNeue400.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
});

const fontMono = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
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
