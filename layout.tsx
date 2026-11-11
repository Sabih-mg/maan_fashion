import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAAN FASHION | Modern Essentials",
  description: "Discover modern fashion essentials at MAAN FASHION.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
