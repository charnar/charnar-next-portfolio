import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

const Navbar = () => {
  const navLinks = ["Works", "Blog"];
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="bg-yellow-100 w-10 h-10 text-xl flex justify-center items-center ml-10 rounded-xl"
          onClick={() => setTheme("light")}
        >
          <span>
            <BsSun className="text-dark-brown cursor-pointer"></BsSun>
          </span>
        </button>
      );
    } else {
      return (
        <button
          className="bg-purple-600 w-10 h-10 text-xl flex justify-center items-center ml-10 rounded-xl"
          onClick={() => setTheme("dark")}
        >
          <span>
            <BsFillMoonStarsFill className="text-pearl-white cursor-pointer" />
          </span>
        </button>
      );
    }
  };

  return (
    <nav className="flex justify-center items-center fixed bg-pearl-white/30 top-0 left-0 py-3 px-6 w-full backdrop-blur-xl dark:bg-dark-brown/30">
      <div className="flex w-full max-w-3xl justify-between">
        <ul className="flex items-center text-dark-brown text-lg gap-x-8 font-medium">
          <Link
            className="hover:text-orange-500 font-bold dark:text-pearl-white cursor-pointer"
            href="/"
          >
            Charn A.
          </Link>

          <div className="max-sm:hidden flex items-center gap-x-8">
            <Link
              className="hover:text-orange-500 dark:text-pearl-white cursor-pointer"
              href="/works"
            >
              Works
            </Link>
            <Link
              className="hover:text-orange-500 dark:text-pearl-white cursor-pointer"
              href="/blog"
            >
              Blog
            </Link>
          </div>
        </ul>

        {renderThemeChanger()}
      </div>
    </nav>
  );
};

export default Navbar;
