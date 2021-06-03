import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import {
  HomeIcon,
  KeyIcon,
  UserIcon,
  CogIcon,
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
                <HomeIcon className="w-5 h-5 fill-current " />

                <span className="ml-2 font-medium text-black capitalize ">
                  Parent Report
                </span>
              </a>
            </li>

            <li className="mt-8">
              <a href="#home" className="flex">
                <KeyIcon className="w-5 h-5 fill-current " />
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
                <CogIcon className="w-5 h-5 fill-current " />

                <span className="ml-2 font-medium text-black capitalize ">
                  Memberships & accounts
                </span>
              </a>
            </li>
          </ul>

          <div
            className="flex items-center text-red-700 cursor-pointer mt-28"
            onClick={signout}
          >
            <a href="#home" className="flex items-center">
              <LogoutIcon className="w-5 h-5 fill-current" />
              <span className="ml-2 font-medium capitalize">log out</span>
            </a>
          </div>
        </nav>
        <main className="flex flex-col flex-1 overflow-y-auto transition duration-500 ease-in-out bg-gray-100">
          <div className="m-auto text-2xl uppercase">Membership</div>
          <div className="fixed inset-0 z-50 flex items-center justify-center h-screen my-auto overflow-x-hidden overflow-y-auto outline-none min-w-screen focus:outline-none">
            <div className="relative w-full max-w-lg p-5 mx-auto my-auto bg-white shadow-lg rounded-xl ">
              <div className="">
                <div className="justify-center flex-auto p-5 text-center">
                  <h2 className="py-4 text-xl font-bold ">Are you sure?</h2>
                  <p className="px-8 text-sm text-gray-500">
                    Do you really want to delete your account? This process
                    cannot be undone
                  </p>
                </div>

                <div className="p-3 mt-2 space-x-4 text-center md:block">
                  <button className="px-5 py-2 mb-2 text-sm font-medium tracking-wider text-gray-600 bg-white border rounded-full shadow-sm md:mb-0 hover:shadow-lg hover:bg-gray-100">
                    Cancel
                  </button>
                  <button className="px-5 py-2 mb-2 text-sm font-medium tracking-wider text-white bg-red-500 border border-red-500 rounded-full shadow-sm md:mb-0 hover:shadow-lg hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
