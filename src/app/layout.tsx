import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iGymBro — Strength Training Tracker for iPhone & Apple Watch",
  description:
    "Build gym programs, log sets from Apple Watch, track PRs and progress. Free. No account. 100% offline.",
  keywords: [
    "gym tracker",
    "workout tracker",
    "strength training",
    "apple watch gym",
    "weightlifting log",
    "exercise tracker",
    "offline fitness",
    "personal records",
  ],
  authors: [{ name: "iGymBro" }],
  openGraph: {
    title: "iGymBro — Strength Training Tracker",
    description:
      "Build gym programs, log sets from Apple Watch, track PRs and progress. Free. No account. 100% offline.",
    url: "https://igymbroapp.com",
    siteName: "iGymBro",
    type: "website",
    images: [
      {
        url: "https://igymbroapp.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "iGymBro — Your gym. Your data. Your wrist.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iGymBro — Strength Training Tracker",
    description:
      "Build gym programs, log sets from Apple Watch, track PRs and progress. Free. No account. 100% offline.",
    images: ["https://igymbroapp.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
