import { useEffect, useState, useRef } from "react";

const MenuItems = () => {
  const genericHamburgerLine = `bg-gray-500 dark:bg-gray-300 h-0.5 w-5 my-0.5 rounded-full bg-black transition ease transform duration-300`;
  // const menuDropdown = `fixed top-16 right-6 bg-pearl-white dark:bg-dark-alt px-10`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="hidden max-sm:flex ml-3 flex-col h-10 w-10 border-2 border-gray-300 dark:border-zinc-700 rounded-xl justify-center items-center group"
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
      <div className="hidden max-sm:block">
        {/* <ul
          className={`${menuDropdown}
               ${isOpen ? "" : "hidden"}`}
        >
          {items.map((item: String) => renderItems(item))}
        </ul> */}
      </div>
    </div>
  );
};

export default MenuItems;
