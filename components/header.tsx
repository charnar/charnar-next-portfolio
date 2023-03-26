"use client";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LinksProp } from "@/interfaces/homepageprops";

import { motion } from "framer-motion";

import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import MenuItems from "./menuitems";
import { useEffect, useState } from "react";

const links = [
  { href: "/works", label: "Works" },
  { href: "/blog", label: "Blog" },
];

export default function Header(): any {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setMounted(true);
  });

  const renderNavLinks = (link: LinksProp) => {
    return (
      <li className="max-sm:hidden">
        <Link
          key={link.href}
          className={
            link.href === path
              ? "text-gold-yellow underline underline-offset-4"
              : "dark:text-pearl-white hover:underline underline-offset-4"
          }
          href={link.href}
        >
          {link.label}
        </Link>
      </li>
    );
  };

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="bg-yellow-100 w-10 h-10 text-xl flex justify-center items-center rounded-xl"
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

  const renderNavbar = () => {
    return (
      <nav className="flex justify-center items-center fixed bg-pearl-white/30 top-0 left-0 py-3 px-6 w-full backdrop-blur-xl dark:bg-dark-brown/30 z-10">
        <div className="flex w-full max-w-3xl justify-between">
          <ul className="flex items-center text-dark-brown text-lg gap-x-8 font-medium">
            <li>
              <Link className="font-bold dark:text-pearl-white" href="/">
                Charn A.
              </Link>
            </li>
            {links.map((link: LinksProp) => renderNavLinks(link))}
          </ul>

          <div className="flex">
            {renderThemeChanger()}
            <MenuItems links={links}></MenuItems>
          </div>
        </div>
      </nav>
    );
  };

  if (!mounted) return;
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-16"
    >
      {renderNavbar()}
    </motion.header>
  );
}
