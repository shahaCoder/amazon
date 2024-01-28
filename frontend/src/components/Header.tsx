import * as React from "react";

export interface IAppProps {}

export function Header(props: IAppProps) {
   return (
      <header className="w-full py-6 px-4 flex items-center justify-between">
         <a href="/" className="flex items-center ga-4">
            <img src="./logo.png" className="w-[48px] h-[36px]" alt="logo" />
            <h1>Amazon Finds</h1>
         </a>
         <ul className="flex items-center gap-4">
            <li>Products</li>
            <li className="max-sm:hidden">Contacts</li>
         </ul>
      </header>
   );
}
