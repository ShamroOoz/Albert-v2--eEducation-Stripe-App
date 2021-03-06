import Link from "next/link";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div
            x-data="{ open: true }"
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <div className="flex flex-row items-center justify-between p-4">
              <Link href="/">
                <a className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                  Albert
                </a>
              </Link>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setisOpen(!isOpen)}
              >
                {isOpen ? (
                  <XIcon className="w-5 h-5 text-blue-500" />
                ) : (
                  <MenuAlt3Icon className="w-5 h-5 text-blue-500" />
                )}
              </button>
            </div>

            <nav
              className={`flex flex-col flex-grow  pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#pablo"
              >
                Junior 3-9??r
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#pablo"
              >
                Albert 10-16??r
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#pablo"
              >
                Nya funktioner
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#pablo"
              >
                Login
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
