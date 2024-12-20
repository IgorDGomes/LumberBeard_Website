import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { Montserrat } from "next/font/google"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${montserrat.className}`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}