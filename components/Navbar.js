import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import Link from "next/link";

const Navbar = ({ handleToggle }) => {
  return (
    <nav className="flex justify-center items-center fixed bg-pearl-white/50 top-0 left-0 py-4 px-6 w-full backdrop-blur-xl dark:bg-dark-brown/30 transition duration-300">
      <div className="flex w-full max-w-7xl justify-end">
        <ul className="flex items-center text-dark-brown text-lg gap-x-8 font-medium max-md:hidden">
          <Link
            href="/"
            className="hover:text-orange-500 dark:text-pearl-white font-semibold cursor-pointer"
          >
            Charn A.
          </Link>
          <Link
            href="/works"
            className="hover:text-orange-500 dark:text-pearl-white cursor-pointer"
          >
            Works
          </Link>
          <Link
            href="/blog"
            className="hover:text-orange-500 dark:text-pearl-white cursor-pointer"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-500 dark:text-pearl-white cursor-pointer"
          >
            Contact
          </Link>
        </ul>

        <button
          onClick={handleToggle}
          className="dark:bg-yellow-100 bg-purple-600 w-10 h-10 text-xl flex justify-center items-center ml-10 rounded "
        >
          <span>
            <BsFillMoonStarsFill className="text-pearl-white dark:hidden cursor-pointer" />
            <BsSun className="hidden dark:block cursor-pointer"></BsSun>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
