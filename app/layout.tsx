import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Janti Jaya - Spesialis Roll Karet & Teflon Berkualitas | Est. 2001",
  description: "Janti Jaya adalah spesialis pembuatan roll karet dan teflon handmade dengan material import untuk mesin percetakan sejak 2001. Melayani mesin offset, giling, dan open di Malang, Indonesia.",
  keywords: "roll karet, roll teflon, mesin offset, mesin percetakan, NBR, Natural Rubber, handmade roll, Malang",
  authors: [{ name: "Janti Jaya" }],
  openGraph: {
    title: "Janti Jaya - Presisi Tanpa Batas Sejak 2001",
    description: "Spesialis roll karet & teflon handmade dengan material import",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
