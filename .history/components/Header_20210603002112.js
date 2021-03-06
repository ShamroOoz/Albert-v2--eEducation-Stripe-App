import Link from "next/link";
import { useRouter } from "next/router";
import { MenuAlt3Icon, XIcon, UserIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();

  console.log(user);
  const signout = () => {
    signOut();
    router.reload();
  };

  return (
    <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
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
              href="/"
            >
              Junior 3-9??r
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/"
            >
              Albert 10-16??r
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/"
            >
              Nya funktioner
            </a>
            {user && (
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="/"
              >
                <UserIcon className="w-5 h-5 text-blue-500" />
              </a>
            )}
            {!user && (
              <>
                <Link href="/login">
                  <a className="justify-center px-4 py-2 mr-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-full shadow-sm mt-2inline-flex whitespace-nowrap hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login
                  </a>
                </Link>
                <Link href="/singup">
                  <a className="justify-center px-4 py-2 mt-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-full shadow-sm md:mt-0 mt-2inline-flex whitespace-nowrap hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Singup
                  </a>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
