import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import {
  ViewGridIcon,
  CalendarIcon,
  UserIcon,
  CollectionIcon,
  LogoutIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

export default function Useraccount() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  console.log(user);
  const signout = () => {
    signOut();
    router.push("/");
  };
  return (
    <Layout>
      <div class="h-screen w-full flex overflow-hidden">
        <nav class="flex flex-col bg-gray-200  w-64 px-12 pt-4 pb-6">
          <div class="mt-8">
            <UserCircleIcon class="h-12 w-12 rounded-full object-cover" />
            <div class="mt-4 text-sm  font-extrabold capitalize">
              {user?.email}
            </div>
          </div>

          <ul class="mt-2 text-gray-600">
            <li class="mt-8">
              <a href="#home" class="flex ">
                <ViewGridIcon class="fill-current h-5 w-5 " />

                <span
                  class="ml-2 capitalize font-medium text-black
						"
                >
                  dashboard
                </span>
              </a>
            </li>

            <li class="mt-8">
              <a href="#home" class="flex">
                <CalendarIcon class="fill-current h-5 w-5 " />
                <span
                  class="ml-2 capitalize font-medium text-black
						"
                >
                  calendar
                </span>
              </a>
            </li>

            <li
              class="mt-8 shadow py-2 bg-white  rounded-lg
				-ml-4"
            >
              <a href="#home" class="flex pl-4">
                <UserIcon class="fill-current h-5 w-5" />

                <span class="ml-2 capitalize font-medium">users</span>
              </a>
            </li>

            <li class="mt-8">
              <a href="#home" class="flex">
                <CollectionIcon class="fill-current h-5 w-5 " />

                <span
                  class="ml-2 capitalize font-medium text-black
						"
                >
                  tasks
                </span>
              </a>
            </li>
          </ul>

          <div
            class="mt-auto flex items-center text-red-700  cursor-pointer"
            onClick={signout}
          >
            <a href="#home" class="flex items-center">
              <LogoutIcon class="fill-current h-5 w-5" />
              <span class="ml-2 capitalize font-medium">log out</span>
            </a>
          </div>
        </nav>
        <main
          class="flex-1 flex flex-col bg-gray-100  transition
		duration-500 ease-in-out overflow-y-auto"
        ></main>
      </div>
    </Layout>
  );
}
