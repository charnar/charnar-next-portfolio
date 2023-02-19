import "@/styles/globals.css";
import { Merriweather } from "@next/font/google";
import { Raleway } from "@next/font/google";

import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

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
  const router = useRouter();
  return (
    <main
      className={`${merriweather.variable} ${raleway.variable} font-raleway`}
    >
      <Head>
        <title>{router.route}</title>
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout></Layout>
        <div className="py-10 px-8 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{ duration: 0.25 }}
              variants={{
                initialState: {
                  opacity: 0,
                  y: 20,
                },
                animateState: {
                  opacity: 1,
                  y: 0,
                },
                exitState: {
                  opacity: 0,
                  y: 20,
                },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </main>
  );
}
