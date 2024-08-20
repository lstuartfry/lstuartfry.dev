import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Lukas Stuart Fry's Personal Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  );
}
