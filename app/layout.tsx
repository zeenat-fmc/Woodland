import type { Metadata } from "next";
import VendorScripts from "@/components/VendorScripts";
import WhatsAppButton from "@/components/WhatsappButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "WoodLand - Doors Redefined | PET, PPH & CCP Door Solutions",
  description:
    "Water-resistant, termite-proof PET, PPH & CCP doors plus complete lock solutions for modern Pakistani homes and businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,0,9..144,300;1,0,9..144,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="site-body">
        <VendorScripts />

        <main className="site-main">
          {children}
        </main>

        <WhatsAppButton />
      </body>
    </html>
  );
}