// import  express  from "express"
// import dotenv from 'dotenv'
// import morgan from "morgan"
// import { prisma } from './app/prisma.js'
// import productRoutes from './app/product/product.routes.js'
// import cors from 'cors'
// import path from "path"
// import multer from "multer"

// dotenv.config()
// const app = express()

// const PORT = process.env.PORT || 3001

// async function main() {
//     if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
//     app.use(cors({ origin: 'http://localhost:3000', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, }));
//     app.use(express.json())
//     const __dirname = path.resolve()
    
//     app.use('/uploads', express.static(path.join(__dirname, '/uploads/')))
//     app.use('/api/products', productRoutes)

//     app.listen(
//         PORT, 
//         console.log(`Server is running ${process.env.NODE_ENV} mode on port ${PORT}`)
//     )
// } 

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async e => {
//     console.log(e);
//     await prisma.$disconnect()
//     process.exit(1)
//   })

import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { prisma } from './app/prisma.js';
import productRoutes from './app/product/product.routes.js';
import cors from 'cors';
import path from 'path';
import multer from 'multer';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

async function main() {
  if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
  app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    })
  );
  app.use(express.json());

  const __dirname = path.resolve();
  
  // Папка для сохранения загруженных файлов
  const uploadDir = path.join(__dirname, 'uploads');

  // Создание хранилища multer
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      // Генерация уникального имени файла, чтобы избежать коллизий
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

  // Применение настроек multer
  const upload = multer({ storage: storage });

  // Маршрут для загрузки файла
  app.post('/uploads', upload.single('img'), (req, res) => {
    // req.file содержит информацию о загруженном файле
    // Вы можете добавить этот файл в вашу базу данных или обработать его как вам нужно
    const { filename } = req.file;
    console.log(req.file);
    res.json({ success: true, filename: filename });
  });

  app.use('/uploads', express.static(uploadDir));
  app.use('/api/products', productRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
