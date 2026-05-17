import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeUpRoot } from "@/lib/fade-up";

export const metadata: Metadata = {
  title: "Taylon Timepieces | Luxury Watches — Buy, Sell, Trade",
  description:
    "Authenticated luxury watches at the best prices. Rolex, Audemars Piguet, Patek Philippe, Breitling and more. In-house authentication. Free shipping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700;800&family=Cormorant+Garamond:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-white text-[#121212]">
        <FadeUpRoot>
          <Header />
          <main>{children}</main>
          <Footer />
        </FadeUpRoot>
      </body>
    </html>
  );
}
