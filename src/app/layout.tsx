import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";

// Meta Data Title and Icon Tab
export const metadata: Metadata = {
  title: "ParksolUSA",
  description: "Short SEO-friendly description",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}