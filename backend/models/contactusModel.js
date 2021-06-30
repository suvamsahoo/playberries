let mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    telephone: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    event: { type: String },
    otherevent: { type: String },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const contactusUser = mongoose.model("contactusUser", contactusSchema);

module.exports = contactusUser;
