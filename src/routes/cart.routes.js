import { Router } from "express";
import {
  getCartById,
  removeProductFromCart,
  updateCart,
  updateProductQuantity,
  clearCart,
} from "../controllers/cart.controller.js";

export const CartRouter = Router();

// Obtener un carrito por ID con los productos poblados
CartRouter.get("/:cid", getCartById);

// Eliminar un producto específico del carrito
CartRouter.delete("/:cid/products/:pid", removeProductFromCart);

// Actualizar un carrito con un arreglo de productos
CartRouter.put("/:cid", updateCart);

// Actualizar solo la cantidad de un producto dentro del carrito
CartRouter.put("/:cid/products/:pid", updateProductQuantity);

// Eliminar todos los productos de un carrito
CartRouter.delete("/:cid", clearCart);
