import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaue Lima - Product Specialist",
  description: "Discover how a Product Specialist with 14+ years of design and strategic expertise transforms challenges into successful products. Expert in leading cross-functional teams and collaboration. Ready to create impact? Let's connect!",
  openGraph: {
    title: "Kaue Lima - Product Specialist", 
    images: [
      {
        url: "../og-image.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
