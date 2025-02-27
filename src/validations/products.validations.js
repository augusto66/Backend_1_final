import Joi from "joi";

export const getProductsSchema = Joi.object({
  limit: Joi.number().integer().min(1).optional().default(10),
  page: Joi.number().integer().min(1).optional().default(1),
  query: Joi.string().optional().min(3),
  sort: Joi.string().optional().valid("asc", "desc"),
});

export const createProductSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  code: Joi.string().required(),
  price: Joi.number().positive().required(),
  status: Joi.boolean().default(true),
  stock: Joi.number().integer().min(0).required(),
  category: Joi.string().optional(),
  thumbnails: Joi.array().items(Joi.string()).optional(),
});

export const updateProductSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  code: Joi.string().optional(),
  price: Joi.number().positive().optional(),
  status: Joi.boolean().optional(),
  stock: Joi.number().integer().min(0).optional(),
  category: Joi.string().optional(),
  thumbnails: Joi.array().items(Joi.string()).optional(),
}).min(1);
