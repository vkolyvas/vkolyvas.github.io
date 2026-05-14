import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "vkolyvas — AI Solution Architect",
  description: "Personal developer portfolio showcasing production systems, software architecture, and technical depth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}