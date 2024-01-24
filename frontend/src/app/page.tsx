'use client'
import { Cards } from "@/components/Cards";
import { Recently } from "@/components/Recently";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
export default function Home() {
  const [visible, setVisible] = useState<boolean>(false)
  const [value, setValue] = useState<string>()
  const [products, setProducts] = useState<[] | any>()
  useEffect(() => {
    if(!value){
      setVisible(false)
    }
    fetch('http://localhost:3001/api/products')
    .then(res => res.json())
      .then(res => setProducts(res))
  }, [])
  console.log(products);
  
  const closeWindow = () => {
    setVisible(false)
  }
  return (
    <div className="w-full min-h-[100vh] mt-10" onClick={() => closeWindow()}>
      <div className="w-full px-6 bg-[#febd67] rounded-lg flex justify-between  select-none">
        <div className="w-[50%] mt-6 mb-6 relative">
          <h1 className="text-8xl tracking-tighter leading-[80px] max-[1400px]:text-7xl max-[1040px]:text-6xl max-[892px]:text-5xl max-[742px]:text-4xl">
            Best products <br /> from Amazon
          </h1>
          <div className="mt-10 text-2xl">
            <h1>More than 100,000</h1>
            <p>Products</p>
          </div>
          <div className="w-[92.1%] px-4 py-2 bg-white flex items-center justify-between rounded-lg mt-10 relative">
            <input
              type="text"
              className="w-[90%] h-full outline-none"
              placeholder="What are you looking for?"
              onKeyUp={() => setVisible(true)}
              onChange={(e: any) =>  setValue(e.target.value)}
              value={value}
              onClick={(e: any) => e.stopPropagation()}
            />
            <div className="p-2 rounded-lg bg-[#febd67]">
              <IoIosSearch size={"35px"} className="m-auto" />
            </div>
            {
              visible ? <div className="w-full min-h-auto bg-white shadow-md rounded-lg mt-5 absolute top-14 left-0" onClick={(e: any) => e.stopPropagation()}>
              <div className="w-full flex hover:bg-gray-200 items-center gap-4 p-4 rounded-t-md">
              <IoIosSearch size={"25px"} />
                <h1 className="font-medium">SUPER PUPER HAT FOR KIDS</h1>
              </div>
              </div>  : null
            }
          </div>
          <Image
            alt=""
            src="./arrow.svg"
            width="100"
            height="100"
            className="w-[30%] absolute -right-[180px] bottom-12 max-[1040px]:-right-[140px]"
          />
        </div>
        <div className="w-[35%] relative mt-6 ">
          <img
            alt=""
            src="./bezos.jpg"
            className="w-[500px] h-[500px] absolute -top-12 max-[1400px]:-top-16 max-[1040px]:w-[400px] max-[1040px]:h-[400px] max-[1040px]:-top-[0px] max-[892px]:-top-[25px] max-[892px]:-right-[25px] max-[742px]:-top-[40px]"
          />
        </div>
      </div>
      <section className="my-10">
        <h1 className="text-2xl font-bold mb-4">RECENTLY PUBLISHED PRODUCTS</h1>
        <Recently />
      </section>
      <section className="my-10">
        <h1 className="text-2xl font-bold mb-4">ALL PRODUCTS</h1>
        <Recently />
      </section>
    </div>
  );
}
