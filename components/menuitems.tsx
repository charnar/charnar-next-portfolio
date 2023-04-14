"use client";
import { LinksProp, MenuItemsProp } from "@/interfaces/homepageprops";
import { useState } from "react";
import Link from "next/link";

const MenuItems: React.FC<MenuItemsProp> = ({ links }) => {
  const genericHamburgerLine = `bg-gray-500 dark:bg-gray-300 h-0.5 w-5 my-0.5 rounded-full transition-transform ease transform duration-300`;
  const menuDropdown = `sm:invisible fixed py-3 top-16 right-6 bg-white dark:bg-dark-alt w-44 rounded-xl dark:border-zinc-700 drop-shadow-sm transition-transform duration-300 transform origin-top-right`;
  const [isOpen, setIsOpen] = useState(false);

  const renderItems = (link: LinksProp) => {
    return (
      <Link href={link.href}>
        <li
          className="px-4 py-2 group hover:bg-orange-300"
          onClick={() => setIsOpen(false)}
        >
          <span className="">{link.label}</span>
        </li>
      </Link>
    );
  };
  return (
    <div>
      <button
        className="hidden max-sm:flex ml-3 flex-col h-10 w-10 border-2 border-gray-300 dark:border-zinc-700 rounded-xl justify-center items-center group "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-1.5 group-hover:opacity-100"
              : "group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-1.5 group-hover:opacity-100"
              : "group-hover:opacity-100"
          }`}
        />
      </button>

      <div className={`${menuDropdown} ${isOpen ? "" : "scale-0"}`}>
        <ul>{links.map((link: LinksProp) => renderItems(link))}</ul>
      </div>
    </div>
  );
};

export default MenuItems;
