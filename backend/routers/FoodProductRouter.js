let express = require("express");
let expressAsyncHandler = require("express-async-handler");
const FoodProduct = require("../models/FoodProductModel");
let data = require("../data");


const FoodProductRouter = express.Router();

FoodProductRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || "";
    const category = req.query.category || "";
    const min =
      req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
      req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;

    const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
    const categoryFilter = category ? { category } : {};
    const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};

    const products = await FoodProduct.find({
      ...nameFilter,
      ...categoryFilter,
      ...priceFilter,
    });
    res.send(products);
  })
);

FoodProductRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await FoodProduct.find().distinct("category");
    res.send(categories);
  })
);

FoodProductRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await FoodProduct.remove({});
    const createdProducts = await FoodProduct.insertMany(data.Veg);
    res.send({ createdProducts });
  })
);

FoodProductRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await FoodProduct.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

module.exports = FoodProductRouter;
