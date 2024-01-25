import * as React from "react";

export interface IAppProps {}

export function Cards({ i }: any) {
   return (
      <a
         href={i.link}
         className="flex flex-col justify-between p-4 max-sm:p-2 rounded-lg border-1 shadow-lg hover:-translate-y-2 duration-100 ease-in"
      >
         <div className="w-full mb-5">
            <img
               src={`http://localhost:3000` + i.img}
               alt="banner"
               className="w-fit"
            />
         </div>
         <div className="w-full ">
            <p className="text-[#007185] text-xl max-sm:text-lg uppercase">
               {i.title}
            </p>
            <div className="flex max-sm:flex-col sm:items-center sm:gap-2">
               <p className="text-[#B12704] text-xl max-sm:text-base max-sm:leading-3">
                  {i.price}$
               </p>
               <p className="text-[#565959]">
                  List price: <span className="line-through">200$</span>
               </p>
            </div>
         </div>
      </a>
   );
}
