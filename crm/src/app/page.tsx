'use client'
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'
export default function Home() {
  // const [file, setFile] = useState<any>()
  const [getFile, setGetFile] = useState<any>()
  // const getData = async (e: any) => {
  //   e.preventDefault()

  //   const product: any = {}

  //   const fd = new FormData(e.target)
  //     fd?.forEach((key: any, value: any) => {
  //       product[value] = key
  //     });
  //     axios.post('http://localhost:3002/api/products', product)
      
  //     //  const dt: any = {}
  // //   const fd = new FormData(e.target)
  // //   fd?.forEach((key: any, value: any) => {
  // //     dt[value] = key
  // //   });
  //   axios.post('http://localhost:3002/uploads', {img: product.img}, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  //     // axios.post('http://localhost:3002/api/uploads', {img: product.img}, {
  //     //       headers: {
  //     //   'Content-Type': 'multipart/form-data'
  //     // }
  //     // })
  // }
    
  const [file, setFile] = useState<any>(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Создаем FormData объект для передачи данных формы, включая файл
    const formData = new FormData();
    formData.append('img', file);

    try {
      // Отправляем картинку на первый эндпоинт http://localhost:3002/uploads
      const uploadResponse = await axios.post('http://localhost:3002/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Получаем название файла из ответа первого эндпоинта
      const uploadedFileName = uploadResponse.data.filename;

      // Обновляем объект productData перед отправкой на второй эндпоинт
      const product: any = {}
      const fd = new FormData(event.target)
      fd?.forEach((key: any, value: any) => {
        product[value] = key
      });
      const productData = {
        title: product?.title,
        price: product?.price, // Замените на свои данные
        link: product?.link,
        img: `/uploads/${uploadedFileName}`, // Обновленный путь к файлу
      };

      // Отправляем данные формы (включая имя файла) на второй эндпоинт http://localhost:3002/api/products
      const productResponse = await axios.post('http://localhost:3002/api/products', productData);

      // Дополнительные действия после успешной отправки на оба эндпоинта
    } catch (error) {
      console.error('Error submitting form:', error);
      // Обработка ошибок
    }
  };
  // }
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
