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

  const signout = () => {
    signOut();
    router.push("/");
  };
  return (
    <Layout>
      <div className="flex w-full h-screen overflow-hidden">
        <nav className="flex flex-col w-64 px-12 pt-4 pb-6 bg-gray-200">
          <div className="flex flex-col items-center justify-center mt-8">
            <UserCircleIcon className="object-cover w-12 h-12 rounded-full" />
            <div className="mt-4 text-sm font-semibold capitalize">
              {user?.email}
            </div>
          </div>

          <ul className="mt-2 text-gray-600">
            <li className="mt-8">
              <a href="#home" className="flex ">
                <ViewGridIcon className="w-5 h-5 fill-current " />

                <span className="ml-2 font-medium text-black capitalize ">
                  Parent Report
                </span>
              </a>
            </li>

            <li className="mt-8">
              <a href="#home" className="flex">
                <CalendarIcon className="w-5 h-5 fill-current " />
                <span className="ml-2 font-medium text-black capitalize ">
                  Start Guide
                </span>
              </a>
            </li>

            <li className="py-2 mt-8 -ml-4 bg-white rounded-lg shadow">
              <a href="#home" className="flex pl-4">
                <UserIcon className="w-5 h-5 fill-current" />

                <span className="ml-2 font-medium capitalize">
                  Manage Profiles
                </span>
              </a>
            </li>

            <li className="mt-8">
              <a href="#home" className="flex">
                <CollectionIcon className="w-5 h-5 fill-current " />

                <span className="ml-2 font-medium text-black capitalize ">
                  tasks
                </span>
              </a>
            </li>
          </ul>

          <div
            className="flex items-center mt-auto text-red-700 cursor-pointer"
            onClick={signout}
          >
            <a href="#home" className="flex items-center">
              <LogoutIcon className="w-5 h-5 fill-current" />
              <span className="ml-2 font-medium capitalize">log out</span>
            </a>
          </div>
        </nav>
        <main className="flex flex-col flex-1 overflow-y-auto transition duration-500 ease-in-out bg-gray-100"></main>
      </div>
    </Layout>
  );
}
