import {
  getProductsSchema,
  createProductSchema,
} from "../validations/products.validations.js";

// Nueva importación para validar actualización
import { updateProductSchema } from "../validations/products.validations.js";

export const validateCreateProduct = (req, res, next) => {
  const { error } = createProductSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ error: error.details.map((d) => d.message).join(", ") });
  }
  next();
};

// Nueva función para validar actualización de productos
export const validateUpdateProduct = (req, res, next) => {
  const { error } = updateProductSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ error: error.details.map((d) => d.message).join(", ") });
  }
  next();
};

export const validateGetProducts = (req, res, next) => {
  const { error } = getProductsSchema.validate(req.params);
  if (error) {
    return res
      .status(400)
      .json({ error: error.details.map((d) => d.message).join(", ") });
  }
  next();
};
