'use client'
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'
export default function Home() {
  const [file, setFile] = useState<any>()
  const getData = async (e: any) => {
    e.preventDefault()

    const product: any = {}

    const fd = new FormData(e.target)
      fd?.forEach((key: any, value: any) => {
        product[value] = key
      });
      fd.append('img', e.target.img.files[0]);
    // axios.post('http://localhost:3001/api/products', product)
    console.log(product);
    
    
  }
  return (
    <div className="w-full py-10">
      <h1 className="text-center text-6xl">CRM</h1>
      <div className="w-[30%] m-auto">
      <form onSubmit={(e) => getData(e)}>
        <p>TITLE</p>
        <input
          type="text"
          id="title"
          className="w-[400px] h-[40px] rounded-md mb-10 text-black p-2"
          placeholder="Title"
          name="title"
        />
        <p>PRICE</p>
        <input
          type="number"
          id="price"
          className="w-[400px] h-[40px] rounded-md mb-10 text-black p-2"
          placeholder="Price"
          name="price"
        />
        <p>LINK</p>
        <input
          type="text"
          id="link"
          className="w-[400px] h-[40px] rounded-md mb-10 text-black p-2"
          placeholder="Link"
          name="link"
        />
        <br />
        <p>ATTACH IMG</p>
        <input type="file" id="file" className="mb-10" name="img"
        />
        <br />
        <button type="submit" className="w-[100px] h-[50px] rounded-md bg-green-500">POST</button>
      </form>
      </div>
    </div>
  );
}
