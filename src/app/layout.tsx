import type { Metadata } from "next";
import { dmSans } from "@/src/styles/font";
import "../styles/globals.css";

import { ToastContainer } from "react-toastify";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Hero from "@/src/components/hero";
export const metadata: Metadata = {
  title: "OneLittleWeb",
  description:
    "This is a landing page for OneLittleWeb, a company that provides Airbnb assistants for property management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}  antialiased`}>
        <Header />
        <Hero />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
