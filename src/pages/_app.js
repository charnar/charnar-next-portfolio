import "@/styles/globals.css";
import { useState } from "react";

import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="py-10 px-14 max-lg:px-8 bg-cream-white dark:bg-dark-brown font-raleway transition duration-300">
        <Navbar handleToggle={toggleTheme}></Navbar>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
