import { CartModel } from "../models/carts.model.js";
import { ProductModel } from "../models/products.model.js";

// Obtener carrito por ID con productos poblados
export const getCartById = async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.cid).populate("products.product");
    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el carrito", error });
  }
};

// Eliminar producto del carrito
export const removeProductFromCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const cart = await CartModel.findById(cid);

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    cart.products = cart.products.filter(
      (item) => item.product.toString() !== pid
    );
    await cart.save();

    res.status(200).json({ message: "Producto eliminado del carrito", cart });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", error });
  }
};

// Actualizar carrito completo
export const updateCart = async (req, res) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(req.params.cid, req.body, {
      new: true,
    }).populate("products.product");

    if (!updatedCart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el carrito", error });
  }
};

// Actualizar cantidad de un producto en el carrito
export const updateProductQuantity = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    const cart = await CartModel.findById(cid);

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === pid
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Producto no encontrado en el carrito" });
    }

    cart.products[productIndex].quantity = quantity;
    await cart.save();

    res.status(200).json({ message: "Cantidad actualizada", cart });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la cantidad del producto", error });
  }
};

// Limpiar carrito
export const clearCart = async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.cid);

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    cart.products = [];
    await cart.save();

    res.status(200).json({ message: "Carrito vacío", cart });
  } catch (error) {
    res.status(500).json({ message: "Error al vaciar el carrito", error });
  }
};