import * as React from "react";

export interface IAppProps {}

export function Cards({i}: any) {
  return (
    <a href={i.link} className="w-[300px] bx h-[300px] p-4 rounded-md border-1 flex flex-col justify-between ">
      <div className="w-full">
        <img src={`http://localhost:3002` + i.img} alt="banner" className="w-fit" />
      </div>
      <div className="w-full ">
        <p className="text-[#007185] text-xl uppercase">
          {i.title}
        </p>
        <div className="flex items-center gap-2"> 
        <p className="text-[#B12704] text-xl">${i.price}</p> <p className="text-[#565959]">List price: <span className="line-through">200$</span></p>
        </div>
      </div>
    </a>
  );
}
