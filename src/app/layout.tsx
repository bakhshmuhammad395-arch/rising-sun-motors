import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rising Sun Motors | Japanese Car Exporters",
  description:
    "Rising Sun Motors exports premium quality Japanese vehicles directly from trusted auctions in Japan. Toyota Land Cruiser, Hilux, Prado, Vezel and more with worldwide shipping.",

  keywords: [
    "Japanese Car Exporters",
    "Japan Used Cars",
    "Toyota Land Cruiser",
    "Toyota Prado",
    "Toyota Hilux",
    "Honda Vezel",
    "Japanese Vehicles",
    "Japan Car Auction",
    "Car Export",
  ],

  icons: {
    icon: "/Images/logo.png",
    shortcut: "/Images/logo.png",
    apple: "/Images/logo.png",
  },

  openGraph: {
    title: "Rising Sun Motors",
    description:
      "Premium Japanese Car Exporters. Quality vehicles shipped worldwide.",
    images: ["/Images/logo.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}