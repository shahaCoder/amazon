import  express  from "express"
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "./product.controller.js"

const router = express.Router()

router.route('/').get(getProducts).post(createProduct)
router.route('/:id').put(updateProduct).delete(deleteProduct).get(getProductById)

export default router