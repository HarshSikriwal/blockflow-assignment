import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import ThemeProvider from "@/components/ThemeContext";
import Background from "@/components/Background";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ThemeProvider>
          <Background>
            <Navbar />
            {children}
          </Background>
        </ThemeProvider>
      </body>
    </html>
  );
}
