import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AINTLY // SAMPLE_02",
  description: "Next-gen industrial intelligence deployment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
