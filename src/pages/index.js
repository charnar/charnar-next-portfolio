import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>charnar | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-10 px-14 max-lg:px-8 bg-cream-white dark:bg-dark-brown font-raleway transition duration-300">
        <Navbar handleToggle={toggleTheme}></Navbar>
      </main>
    </div>
  );
}
