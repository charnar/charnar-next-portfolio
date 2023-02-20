"use client";
import "../styles/globals.css";
import { Merriweather } from "@next/font/google";
import { Raleway } from "@next/font/google";

import { ThemeProvider } from "next-themes";
import Header from "@/components/header";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${raleway.variable} font-raleway`}
    >
      <head />
      <body>
        <ThemeProvider attribute="class">
          <Header></Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
