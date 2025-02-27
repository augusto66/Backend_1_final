import { ProductModel } from '../models/products.model.js';

export class ProductService {
  // Crear un nuevo producto
  createProduct = async (productData) => {
    try {
      const product = new ProductModel(productData);
      await product.save();
      return product;
    } catch (error) {
      throw new Error('Error al crear el producto: ' + error.message);
    }
  };

  // Obtener todos los productos con paginación y filtros
  getProducts = async ({ limit, page, query, sort }) => {
    try {
      // Filtros básicos para búsqueda
      const filter = query ? { $or: [{ title: new RegExp(query, 'i') }, { description: new RegExp(query, 'i') }] } : {};

      // Ordenamiento
      const options = sort ? { sort: { price: sort === 'asc' ? 1 : -1 } } : {};

      // Paginación
      const products = await ProductModel.paginate(filter, {
        ...options,
        page,
        limit,
      });

      return products;
    } catch (error) {
      throw new Error('Error al obtener los productos: ' + error.message);
    }
  };

  // Obtener un producto por ID
  getProductById = async (id) => {
    try {
      const product = await ProductModel.findById(id);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return product;
    } catch (error) {
      throw new Error('Error al obtener el producto: ' + error.message);
    }
  };

  // Actualizar un producto por ID
  updateProduct = async (id, productData) => {
    try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(id, productData, { new: true });
      if (!updatedProduct) {
        throw new Error('Producto no encontrado para actualizar');
      }
      return updatedProduct;
    } catch (error) {
      throw new Error('Error al actualizar el producto: ' + error.message);
    }
  };

  // Eliminar un producto por ID
  deleteProduct = async (id) => {
    try {
      const deletedProduct = await ProductModel.findByIdAndDelete(id);
      if (!deletedProduct) {
        throw new Error('Producto no encontrado para eliminar');
      }
      return deletedProduct;
    } catch (error) {
      throw new Error('Error al eliminar el producto: ' + error.message);
    }
  };
}