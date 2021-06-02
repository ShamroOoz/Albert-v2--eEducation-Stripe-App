import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import {
  ViewGridIcon,
  CalendarIcon,
  UserIcon,
  collection,
} from "@heroicons/react/solid";

export default function Useraccount() {
  const { user, signOut } = useAuth();

  return (
    <Layout>
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
                <ViewGridIcon class="fill-current h-5 w-5 dark:text-gray-300" />

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
                <CalendarIcon class="fill-current h-5 w-5 dark:text-gray-300" />
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
                <UserIcon class="fill-current h-5 w-5" />

                <span class="ml-2 capitalize font-medium">users</span>
              </a>
            </li>

            <li class="mt-8">
              <a href="#home" class="flex">
                <collection class="fill-current h-5 w-5 dark:text-gray-300" />

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
    </Layout>
  );
}
