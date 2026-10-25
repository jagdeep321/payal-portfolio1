import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { ColorSchemeScript } from "@mantine/core";
import Providers from "@/components/Providers";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Payal Arora | Digital Marketer & Social Media Executive",
  description:
    "Explore Payal Arora's digital marketing portfolio featuring social media management, graphic design, video editing, paid advertising, profile optimization, and website design.",
  keywords: [
    "Payal Arora",
    "Digital Marketer",
    "Social Media Executive",
    "Meta Ads",
    "Content Creator",
    "Graphic Designer",
    "Video Editing",
    "Amritsar",
  ],
  authors: [{ name: "Payal Arora" }],
  openGraph: {
    title: "Payal Arora | Digital Marketer & Social Media Executive",
    description:
      "Igniting brand growth and digital presence through creative strategies. Specializing in social media management, graphic design, reel hooks, and Meta ads.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable}`}
      data-mantine-color-scheme="light"
    >
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
