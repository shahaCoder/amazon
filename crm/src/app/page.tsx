'use client'
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'
export default function Home() {
  const [getFile, setGetFile] = useState<any>()  
  const [file, setFile] = useState<any>(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('img', file);

    try {
      const uploadResponse = await axios.post('http://localhost:3002/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      
      const uploadedFileName = uploadResponse.data.filename;
      
      const product: any = {}
      const fd = new FormData(event.target)
      fd?.forEach((key: any, value: any) => {
        product[value] = key
      });
      const productData = {
        title: product?.title,
        price: product?.price, 
        link: product?.link,
        img: `/uploads/${uploadedFileName}`,
      };
      
      const productResponse = await axios.post('http://localhost:3002/api/products', productData);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="w-full py-10">
      <h1 className="text-center text-6xl">CRM</h1>
      <div className="w-[30%] m-auto">
      <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
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
        <input type="file" id="file" name="img" className="mb-10"
        onChange={handleFileChange}
        />
        <br />
        <button type="submit" className="w-[100px] h-[50px] rounded-md bg-green-500">POST</button>
      </form>
      </div>
    </div>
  );
}
