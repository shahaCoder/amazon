'use client'
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'
export default function Home() {
  const [file, setFile] = useState<any>()
  const [getFile, setGetFile] = useState<any>()
  const getData = async (e: any) => {
    e.preventDefault()

    const product: any = {
      img: '/uploads/' + file
    }

    const fd = new FormData(e.target)
      fd?.forEach((key: any, value: any) => {
        product[value] = key
      });
      axios.post('http://localhost:3001/api/products', product)
  }
  const getFileForm = (e: any) => {
    e.preventDefault()
    const dt: any = {}
    const fd = new FormData(e.target)
    fd?.forEach((key: any, value: any) => {
      dt[value] = key
    });
    axios.post('http://localhost:3001/uploads', dt, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(dt);
    
    
    
  }
  return (
    <div className="w-full py-10">
      <h1 className="text-center text-6xl">CRM</h1>
      <div className="w-[30%] m-auto">
      <form onSubmit={(e) => getData(e)} encType="multipart/form-data">
        <p className="">TITLE</p>
        <input
          type="text"
          id="title"
          className="w-[400px] h-[40px] rounded-md mb-10 text-black p-2 border-2"
          placeholder="Title"
          name="title"
        />
        <p>PRICE</p>
        <input
          type="number"
          id="price"
          className="w-[400px] h-[40px] rounded-md mb-10 text-black p-2 border-2"
          placeholder="Price"
          name="price"
        />
        <p>LINK</p>
        <input
          type="text"
          id="link"
          className="w-[400px] h-[40px] rounded-md mb-10 text-black p-2 border-2"
          placeholder="Link"
          name="link"
        />
        <br />
        <p>ATTACH IMG</p>
        <input type="file" id="file" className="mb-10"
        onChange={(e: any) => setFile(e.target.files[0].name)}
        />
        <br />
        <button type="submit" className="w-[100px] h-[50px] rounded-md bg-green-500">POST</button>
      </form>
      <form  onSubmit={e => getFileForm(e)}>
      <p className="mt-10">ATTACH IMG 2</p>
        <input type="file" id="file" name="image" className="mb-10" onChange={(e: any) => setGetFile(e.target.files[0])} />
        <button type="submit" className="w-[100px] h-[50px] rounded-md bg-green-500">POST</button>
      </form>
      </div>
    </div>
  );
}
