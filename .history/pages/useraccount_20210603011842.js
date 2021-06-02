import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";

export default function Useraccount() {
  const { user, signOut } = useAuth();

  return (
    <div class="h-screen w-full flex overflow-hidden">
      <nav class="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
        <div class="mt-8">
          <img
            class="h-12 w-12 rounded-full object-cover"
            src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png"
            alt="enoshima profile"
          />
          <h2 class="mt-4 text-xl dark:text-gray-300 font-extrabold capitalize">
            Hello Enoshima
          </h2>
        </div>

        <ul class="mt-2 text-gray-600">
          <li class="mt-8">
            <a href="#home" class="flex ">
              <svg
                class="fill-current h-5 w-5 dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
							4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
							4h4v-4h-4M4 8h4V4H4v4z"
                ></path>
              </svg>
              <span
                class="ml-2 capitalize font-medium text-black
						dark:text-gray-300"
              >
                dashboard
              </span>
            </a>
          </li>

          <li class="mt-8">
            <a href="#home" class="flex">
              <svg
                class="fill-current h-5 w-5 dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
							2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
							00-2-2h-1V1m-1 11h-5v5h5v-5z"
                ></path>
              </svg>
              <span
                class="ml-2 capitalize font-medium text-black
						dark:text-gray-300"
              >
                calendar
              </span>
            </a>
          </li>

          <li
            class="mt-8 shadow py-2 bg-white dark:bg-gray-200 rounded-lg
				-ml-4"
          >
            <a href="#home" class="flex pl-4">
              <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
							014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
							8-4z"
                ></path>
              </svg>
              <span class="ml-2 capitalize font-medium">users</span>
            </a>
          </li>

          <li class="mt-8">
            <a href="#home" class="flex">
              <svg
                class="fill-current h-5 w-5 dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 13H7v5h5v2H5V10h2v1h5v2M8
							4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
							9v2h-4v-2h4m2-2h-8v6h8v-6z"
                ></path>
              </svg>
              <span
                class="ml-2 capitalize font-medium text-black
						dark:text-gray-300"
              >
                tasks
              </span>
            </a>
          </li>
        </ul>

        <div class="mt-auto flex items-center text-red-700 dark:text-red-400">
          <a href="#home" class="flex items-center">
            <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"
              ></path>
            </svg>
            <span class="ml-2 capitalize font-medium">log out</span>
          </a>
        </div>
      </nav>
      <main
        class="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
		duration-500 ease-in-out overflow-y-auto"
      ></main>
    </div>
  );
}
