import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/components/provider/page";

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
      <body className={` bg-[#FFF1E6] antialiased overflow-hidden`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
