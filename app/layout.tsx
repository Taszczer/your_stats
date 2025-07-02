import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "YourStats",
  description: "Check your CS2 statistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-[#FFF1E6] antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
