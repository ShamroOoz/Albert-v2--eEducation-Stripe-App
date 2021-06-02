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
      <div class="bg-gray-100 pt-2 ">
        <div
          class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
        >
          <div class="mt-2">© Copyright 2020. All Rights Reserved.</div>
          <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" class="w-6 mx-1">
              <svg
                class="fill-current cursor-pointer text-gray-500 hover:text-gray-400"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <path
                  id="Facebook"
                  d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                ></path>
              </svg>
            </a>

            <a href="/" class="w-6 mx-1">
              <svg
                class="fill-current cursor-pointer text-gray-500 hover:text-gray-400"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <path
                  id="Shape"
                  d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z"
                ></path>
              </svg>
            </a>
            <a href="/" class="w-6 mx-1">
              <svg
                class="fill-current cursor-pointer text-gray-500 hover:text-gray-400"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <path
                  id="Combined-Shape"
                  d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
                  -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
                  -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
                  0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
                  0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
                  -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
