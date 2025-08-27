import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import Footer from "@/components/footer";


// Meta Data Title and Icon Tab
export const metadata: Metadata = {
  title: "ParksolUSA",
  description: "Parking systems company specializing in the latest technology including AI detection, counting software, sensors, and LEDs.",
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
        <Footer />
      </body>
    </html>
  );
}