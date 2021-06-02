import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <main class="mx-4 my-16">
        <div class="text-center">
          <h1 class="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
            Our <span class="font-semibold">plans</span> for your{" "}
            <span class="font-semibold">strategies</span>
          </h1>
          <p class="text-sm font-normal text-gray-400">
            See below our main three plans for your business, for your startup
            and agency.
          </p>
          <p class="text-sm font-normal text-gray-400">
            It start from here! You can teach yourself what you really like.
          </p>
        </div>
      </main>
    </Layout>
  );
}
