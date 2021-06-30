let mongoose = require("mongoose");

const GalleryProductSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const GalleryProduct = mongoose.model("GalleryProduct", GalleryProductSchema);

module.exports = GalleryProduct;
