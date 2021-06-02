import Link from "next/link";

export default function Header() {
  return (
    <div class="min-h-screen">
      <div class="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div
            x-data="{ open: true }"
            class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <div class="flex flex-row items-center justify-between p-4">
              <a
                href="#"
                class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                Flowtrail UI
              </a>
              <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
