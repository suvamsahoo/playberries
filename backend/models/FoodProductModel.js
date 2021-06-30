let mongoose = require("mongoose");

const foodProductSchema = new mongoose.Schema(
  {
    productNo: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    ItemsInPrice:{ type: String, required: false},
    additionalPrice: { type: Number, required: true },
    ItemsInadditionalPrice:{ type: String, required: false},
    image: { type: String, required: true },
    countInStock: { type: Number, required: true },
    category: { type: String, required: true },
    personCountStart: { type: Number, required: true }
    // description: { type: String, required: true },
    // brand: { type: String, required: true },
    // category: { type: String, required: true },
    // rating: { type: Number, required: true },
    // numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const FoodProduct = mongoose.model("FoodProduct", foodProductSchema);

module.exports = FoodProduct;
