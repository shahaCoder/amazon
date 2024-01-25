import * as React from "react";

export interface IAppProps {}

export function Hedaer(props: IAppProps) {
   return (
      <header className="w-full py-6 px-4 flex items-center justify-between">
         <h1>Amazon Finds</h1>
         <ul className="flex items-center gap-4">
            <li>Products</li>
            <li>Contacts</li>
         </ul>
      </header>
   );
}
