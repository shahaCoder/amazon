"use client";
import { Cards } from "@/components/Cards";
import { Recently } from "@/components/Recently";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const arr = [
   {
      id: 0,
      title: "hot hat",
      img: "/hat.jpg",
      price: "100",
      link: "#",
   },
   {
      id: 1,
      title: "hot hat 2",
      img: "/hat.jpg",
      price: "1000",
      link: "#",
   },
   {
      id: 2,
      title: "hot hat 3",
      img: "/hat.jpg",
      price: "300",
      link: "#",
   },
   {
      id: 3,
      title: "hot hat 4",
      img: "/hat.jpg",
      price: "200",
      link: "#",
   },
   {
      id: 4,
      title: "hot hat 5",
      img: "/hat.jpg",
      price: "100",
      link: "#",
   },
   {
      id: 5,
      title: "hot hat 6",
      img: "/hat.jpg",
      price: "1",
      link: "#",
   },
];

export default function Home() {
   const [visible, setVisible] = useState<boolean>(false);
   const [value, setValue] = useState<string>();
   const [products, setProducts] = useState<any>(arr);
   useEffect(() => {
      if (!value) {
         setVisible(false);
      }
      // fetch("http://localhost:3000/api/products")
      //    .then((res) => res.json())
      //    .then((res) => setProducts(res));
   }, []);
   console.log(products);

   const closeWindow = () => {
      setVisible(false);
   };

   return (
      <div
         className="custom-container mt-10 max-md:mt-5 max-xs:mt-3"
         onClick={() => closeWindow()}
      >
         <div className="w-full flex max-sm:flex-col justify-between px-6 max-lg:px-3 rounded-lg select-none bg-[#febd67]">
            <div className="max-lg:max-w-xs max-sm:max-w-full max-lg:w-full relative flex flex-col my-6 max-md:my-3">
               <h1 className="text-[72px] max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl font-medium tracking-tighter leading-[70px]">
                  Best products <br className="max-sm:hidden" /> from Amazon
               </h1>
               <div className="mt-2 max-xl:mt-1 max-sm:mb-14 text-2xl max-xl:text-xl max-lg:text-lg">
                  <h1>More than 100,000</h1>
                  <p>Products</p>
               </div>
               <div className="bg-white max-w-xl w-full relative flex items-center justify-between mt-auto rounded-lg">
                  <input
                     type="text"
                     className="w-full h-full p-4 max-lg:p-3 max-md:p-3 rounded-lg outline-none"
                     placeholder="What are you looking for?"
                     onKeyUp={() => setVisible(true)}
                     onChange={(e: any) => setValue(e.target.value)}
                     value={value}
                     onClick={(e: any) => e.stopPropagation()}
                  />
                  <div className="absolute right-2 top-2 max-lg:right-1 max-lg:top-1 p-2 rounded-lg select-none pointer-events-none bg-[#febd67]">
                     <IoIosSearch size={25} className="m-auto" />
                  </div>
                  {visible ? (
                     <div
                        className="w-full min-h-auto bg-white shadow-md rounded-lg mt-5 absolute top-14 left-0"
                        onClick={(e: any) => e.stopPropagation()}
                     >
                        <div className="w-full flex hover:bg-gray-200 items-center gap-4 p-4 rounded-t-md">
                           <IoIosSearch size={"25px"} />
                           <h1 className="font-medium">
                              SUPER PUPER HAT FOR KIDS
                           </h1>
                        </div>
                     </div>
                  ) : null}
               </div>
            </div>
            <div className="flex items-center pointer-events-none max-sm:hidden">
               <div className="max-w-[200px] max-2xl:max-w-[150px] max-xl:max-w-[100px] max-lg:hidden">
                  <Image
                     alt=""
                     src="./arrow.svg"
                     width="1000"
                     height="1000"
                     className=""
                  />
               </div>
               <div className="max-w-[400px] max-2xl:max-w-xs max-md:max-w-[300px]">
                  <img alt="" src="./bezos.jpg" className="scale-125" />
               </div>
            </div>
         </div>
         <section className="my-10">
            <h1 className="text-2xl font-bold mb-4">
               RECENTLY PUBLISHED PRODUCTS
            </h1>
            <Recently data={products} />
         </section>
         <section className="my-10">
            <h1 className="text-2xl font-bold mb-4">ALL PRODUCTS</h1>
            <Recently data={products} />
         </section>
      </div>
   );
}
