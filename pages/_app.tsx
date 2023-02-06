import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { Merriweather } from "@next/font/google";
import { Raleway } from "@next/font/google";

import Layout from "./layout";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${merriweather.variable} ${raleway.variable} font-raleway`}
    >
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout></Layout>
        <div className="py-10 px-8 max-w-3xl mx-auto">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </main>
  );
}
