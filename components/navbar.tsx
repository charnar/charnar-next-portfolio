"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { linksProp } from "@/interfaces/homepageprops";

import { motion } from "framer-motion";

import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import MenuItems from "./menuitems";

const Navbar = () => {
  const links = [
    { href: "/works", label: "Works" },
    { href: "/blog", label: "Blog" },
  ];

  const { systemTheme, theme, setTheme } = useTheme();
  const path = usePathname();

  const renderNavLinks = (link: linksProp) => {
    return (
      <li className="max-sm:hidden relative">
        <Link
          key={link.href}
          className={
            link.href === path ? "text-gold-yellow" : "dark:text-pearl-white"
          }
          href={link.href}
        >
          {link.href === path && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 top-full block h-[2px] bg-gold-yellow w-full"
            />
          )}
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
            {links.map((link: linksProp) => renderNavLinks(link))}
          </ul>

          <div className="flex">
            {renderThemeChanger()}
            <MenuItems></MenuItems>
          </div>
        </div>
      </nav>
    );
  };

  return renderNavbar();
};

export default Navbar;
