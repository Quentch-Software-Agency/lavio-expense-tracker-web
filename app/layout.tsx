import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAVIO — Spend with clarity",
  description: "A smarter, completely free way to track money, build budgets and reach your goals.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
