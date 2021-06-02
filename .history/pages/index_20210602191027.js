import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <main className="mx-4 my-16">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
            Our <span className="font-semibold">plans</span> for your{" "}
            <span className="font-semibold">strategies</span>
          </h1>
          <p className="text-sm font-normal text-gray-400">
            See below our main two plans for your startup.
          </p>
          <p className="text-sm font-normal text-gray-400">
            It start from here! You can teach yourself what you really like.
          </p>
        </div>

        <div class="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
          <section class="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md">
            <div class="flex-shrink-0">
              <span class="text-4xl font-medium tracking-tight"></span>
              <span
                class="text-gray-400"
                x-text="billPlan == 'monthly' ? '/month' : '/year'"
              ></span>
            </div>

            <div class="flex-shrink-0 pb-6 space-y-2 border-b">
              <h2 class="text-2xl font-normal" x-text="plan.name"></h2>
              <p class="text-sm text-gray-400" x-text="plan.discretion"></p>
            </div>

            <ul class="flex-1 space-y-4">
              <template x-for="(feature, i) in plan.features" x-key="i">
                <li class="flex items-start">
                  <svg
                    class="w-6 h-6 text-green-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    class="ml-3 text-base font-medium"
                    x-text="feature"
                  ></span>
                </li>
              </template>
            </ul>

            <div class="flex-shrink-0 pt-4">
              <button class="inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"></button>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
