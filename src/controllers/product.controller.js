import { ProductService } from '../services/product.service.js'; // Asegúrate de importar tu servicio de productos

export class ProductController {
  constructor() {
    this.productService = new ProductService(); // Inicializar el servicio de productos
  }

  // Método para obtener productos con paginación y filtros
  getProducts = async (req, res, next) => {
    try {
      let { limit, page, query, sort } = req.query;
      
      limit = limit || 10;
      page = page || 1;
      query = query || '';
      sort = sort || null;

      console.log({ limit, page, query, sort });

      const products = await this.productService.getProducts({ limit, page, query, sort });

      res.json({
        message: 'Productos obtenidos correctamente',
        data: products,
      });
    } catch (error) {
      next(error);
    }
  };

  // Método para obtener un producto por ID
  getProductById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await this.productService.getProductById(id);

      if (!product) {
        return res.status(404).json({
          message: 'Producto no encontrado',
        });
      }

      res.json({
        message: 'Producto obtenido correctamente',
        data: product,
      });
    } catch (error) {
      next(error);
    }
  };

  // Método para crear un producto
  createProduct = async (req, res, next) => {
    try {
      const productData = req.body;
      const newProduct = await this.productService.createProduct(productData);

      res.status(201).json({
        message: 'Producto creado correctamente',
        data: newProduct,
      });
    } catch (error) {
      next(error);
    }
  };

  // Método para actualizar un producto por ID
  updateProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedProduct = await this.productService.updateProduct(id, updatedData);

      if (!updatedProduct) {
        return res.status(404).json({
          message: 'Producto no encontrado',
        });
      }

      res.json({
        message: 'Producto actualizado correctamente',
        data: updatedProduct,
      });
    } catch (error) {
      next(error);
    }
  };

  // Método para eliminar un producto por ID
  deleteProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedProduct = await this.productService.deleteProduct(id);

      if (!deletedProduct) {
        return res.status(404).json({
          message: 'Producto no encontrado',
        });
      }

      res.json({
        message: 'Producto eliminado correctamente',
        data: deletedProduct,
      });
    } catch (error) {
      next(error);
    }
  };
}
