import * as React from "react";

export interface IAppProps {}

export function Footer(props: IAppProps) {
   return (
      <div>
         <div className="w-full py-6 ">
            <footer className="bg-white">
               <div className="w-full custom-container">
                  <div className="sm:flex sm:items-center sm:justify-between">
                     <a
                        href="#"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                     >
                        <img
                           src="https://flowbite.com/docs/images/logo.svg"
                           className="h-8"
                           alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                           Amazon Finds
                        </span>
                     </a>
                     <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                           <a href="#" className="hover:underline me-4 md:me-6">
                              Products
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:underline">
                              Contact
                           </a>
                        </li>
                     </ul>
                  </div>
                  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                  <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                     © 2024{" "}
                     <a href="#" className="hover:underline">
                        Amazon Finds™
                     </a>
                     . All Rights Reserved.
                  </span>
               </div>
            </footer>
         </div>
      </div>
   );
}
