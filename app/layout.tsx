import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";

// ตั้งค่าฟอนต์ 2 ตัว
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["400", "600"],
  variable: '--font-sarabun',
});

export const metadata: Metadata = {
  title: "Chakron Yuraket Portfolio",
  description: "Crafting robust and scalable web applications. My approach is rooted in clarity, structure, and a relentless focus on solving the right problem.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sarabun.variable} scroll-smooth`}>
      <body
        className="font-sans" // ใช้ Sarabun เป็น default
        style={{
          backgroundColor: 'var(--color-canvas)',
          color: 'var(--color-ink)'
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}