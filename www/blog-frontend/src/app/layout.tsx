import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LdMenu from "./components/LdMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "村望老弟",
  description: "多读书多看报 少吃零食多睡觉！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <LdMenu></LdMenu>
        {children}
      </body>
    </html>
  );
}