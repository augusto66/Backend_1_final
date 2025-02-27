import { Router } from 'express';
import { ProductController } from '../controllers/product.controller.js';
import { validateGetProducts, validateCreateProduct, validateUpdateProduct } from '../middlewares/validationMiddleware.js';

export const ProductRouter = Router();

const productController = new ProductController();

// Ruta para obtener los productos (con paginación y filtros)
ProductRouter.get('/', validateGetProducts, productController.getProducts);

// Ruta para crear un nuevo producto
ProductRouter.post('/', validateCreateProduct, productController.createProduct);

// Ruta para actualizar un producto por ID
ProductRouter.put('/:id', validateUpdateProduct, productController.updateProduct);

// Ruta para eliminar un producto por ID
ProductRouter.delete('/:id', productController.deleteProduct);