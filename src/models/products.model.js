import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productCollection = "products";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    description: { type: String, required: true, index: true },
    code: {
      type: String,
      unique: true,
      required: true,
    },
    price: { type: Number, required: true, index: true, min: 0 },
    status: { type: Boolean, default: true },
    stock: { type: Number, required: true, min: 0 },
    category: { type: String },
    thumbnails: { required: false, type: [String], default: [] },
  },
  { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);

export const ProductModel = mongoose.model(productCollection, productSchema);
