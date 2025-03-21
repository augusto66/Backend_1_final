import mongoose from "mongoose";

const cartsCollections = "carts";

const cartSchema = new mongoose.Schema(
  {
    products: {
      type: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products",
          },
          quantity: {
            type: Number,
            default: 1,
            min: 1, // Asegura que la cantidad no sea menor que 1
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
);

//pre-populate (opcional)
cartSchema.pre("findOne", function () {
  this.populate("products.product");
});

export const CartModel = mongoose.model(cartsCollections, cartSchema);
