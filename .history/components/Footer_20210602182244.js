import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="bg-gray-100">
        <div className="flex flex-wrap justify-center max-w-6xl m-auto text-gray-800">
          <div className="w-48 p-5 ">
            <div className="text-xs font-medium text-gray-500 uppercase">
              Home
            </div>
          </div>
          <div className="w-48 p-5 ">
            <div className="text-xs font-medium text-gray-500 uppercase">
              Produkt
            </div>
            <a className="block my-3" href="/#">
              Junior 3-9år <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">
              Albert 10-16år <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">
              Nya funktioner{" "}
              <span className="p-1 text-xs text-teal-600">New</span>
            </a>
          </div>
          <div className="w-48 p-5 ">
            <div className="text-xs font-medium text-gray-500 uppercase">
              Support
            </div>
            <a className="block my-3" href="/#">
              Frågor och svar{" "}
              <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">
              Kontakt<span className="p-1 text-xs text-teal-600"></span>
            </a>
          </div>
          <div className="w-48 p-5 ">
            <div className="text-xs font-medium text-gray-500 uppercase">
              Albert
            </div>
            <a className="block my-3" href="/#">
              Om oss <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">
              CSR <span className="p-1 text-xs text-teal-600">New</span>
            </a>
            <a className="block my-3" href="/#">
              Karriär <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">
              Blogg<span className="p-1 text-xs text-teal-600"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
