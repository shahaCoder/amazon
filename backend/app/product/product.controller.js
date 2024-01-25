import asyncHandler from 'express-async-handler'
import  express  from "express"
import { prisma } from '../prisma.js'
// dotenv.config()
// const app = express()

export const createProduct = asyncHandler(async (req, res) => {
    const {title, img, price, link} = req.body
    try {
        const product = await prisma.product.create({
            data: {
                title,
                price: +price,
                img,
                link
            },
        });
        res.json(product);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export const getProducts = asyncHandler(async (req, res) => {
    const products = await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    res.json(products)
})

export const updateProduct = asyncHandler(async (req, res) => {
    const {title, img, price, link} = req.body
    try {
        const product = await prisma.product.update({
            where: {
                id: +req.params.id,
            },
            data: {
                title,
                price,
                img,
                link
            },
        });
        res.json(product);
    } catch (error) {
        console.error('Error updating book:', error);
    }
})

export const deleteProduct = asyncHandler(async(req, res) => {
        try {
            const product = await prisma.product.delete({
                where: {
                    id: +req.params.id,
                },
            });
            res.json({message: 'Product deleted'});
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    })

    export const getProductById = asyncHandler(async (req, res) => {
        const bookId = +req.params.id;
    
        try {
            const product = await prisma.product.findUnique({
                where: {
                    id: bookId,
                }
            });
                res.json(product);
        } catch (error) {
            console.error('Error getting product:', error);
            res.status(500).json({ error: error.message });
        }
    });
