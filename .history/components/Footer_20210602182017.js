import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div class="bg-gray-100">
        <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
          <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">Home</div>
          </div>
          <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">
              Produkt
            </div>
            <a class="my-3 block" href="/#">
              Junior 3-9år <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Albert 10-16år <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Nya funktioner <span class="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">
              Support
            </div>
            <a class="my-3 block" href="/#">
              Frågor och svar <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Kontakt<span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">
              Product
            </div>
            <a class="my-3 block" href="/#">
              Our Products <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Great Deals <span class="text-teal-600 text-xs p-1">New</span>
            </a>
            <a class="my-3 block" href="/#">
              Analytics <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Mobile <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">
              Support
            </div>
            <a class="my-3 block" href="/#">
              Help Center <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Privacy Policy <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Conditions <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5 w-48 ">
            <div class="text-xs uppercase text-gray-500 font-medium">
              Contact us
            </div>
            <a class="my-3 block" href="/#">
              XXX XXXX, Floor 4 San Francisco, CA{" "}
              <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              contact@company.com{" "}
              <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
