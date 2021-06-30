let express = require("express");
let expressAsyncHandler = require("express-async-handler");
const GalleryProduct = require("../models/GalleryProductModel");
let { isAdmin, isAuth } = require("../utils");
const GalleryScreenData = require("../GalleryScreenData");

const GalleryProductRouter = express.Router();

GalleryProductRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await GalleryProduct.find({});
    res.send(products);
  })
);

GalleryProductRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
      // await GalleryProduct.remove({});
    const createdProducts = await GalleryProduct.insertMany(
      GalleryScreenData.data
    );
    res.send({ createdProducts });
  })
);

GalleryProductRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await GalleryProduct.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

GalleryProductRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new GalleryProduct({
      name: "samle name " + Date.now(),
      image: "/images/Gallery/1.jpg",
      category: "sample category",
    });
    const createdProduct = await product.save();
    res.send({ message: "Product Created", product: createdProduct });
  })
);

GalleryProductRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await GalleryProduct.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.image = req.body.image;
      product.category = req.body.category;
   
      const updatedProduct = await product.save();
      res.send({ message: 'Product Updated', product: updatedProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

GalleryProductRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await GalleryProduct.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: 'Product Deleted', product: deleteProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

module.exports = GalleryProductRouter;
