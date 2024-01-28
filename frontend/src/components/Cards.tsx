import * as React from "react";

export interface IAppProps {}

export function Cards({ i }: any) {
   return (
      <a
         href={i?.link}
         className="flex flex-col justify-between p-4 max-sm:p-2 rounded-lg border-1 shadow-lg hover:-translate-y-2 duration-100 ease-in h-[320px]"
      >
         <div className="w-full h-[220px]  mb-5 bg-no-repeat bg-contain bg-center" style={{backgroundImage: `url(http://localhost:3002${i?.img})`}}>
         </div>
         <div className="w-full mt-auto">
            <p className="text-[#007185] truncate text-md max-sm:text-lg uppercase">
               {i?.title}
            </p>
            <div className="flex max-sm:flex-col sm:items-center sm:gap-2">
               <p className="text-[#B12704] text-xl max-sm:text-base max-sm:leading-3">
                  {i?.price}$
               </p>
               <p className="text-[#565959]">
                  List price: <span className="line-through">{i.lastPrice}$</span>
               </p>
            </div>
         </div>
      </a>
   );
}
