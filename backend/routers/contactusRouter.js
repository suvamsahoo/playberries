let express = require("express");
let expressAsyncHandler = require("express-async-handler");
const contactusUser = require("../models/contactusModel");
let { isAdmin, isAuth } = require("../utils");
const contactusRouter = express.Router();

contactusRouter.post(
  "/contactus",
  expressAsyncHandler(async (req, res) => {
    const user = new contactusUser({
      name: req.body.name,
      telephone: req.body.telephone,
      email: req.body.email,
      event: req.body.event,
      otherevent: req.body.otherevent,
      message: req.body.message,
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      telephone: createdUser.telephone,
      email: createdUser.email,
      event: createdUser.event,
      otherevent: createdUser.otherevent,
      message: createdUser.message,
    });
  })
);

 

contactusRouter.get(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const users = await contactusUser.find({});
    res.send(users);
  })
);

contactusRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await contactusUser.findById(req.params.id);
    if (user) {
      const deleteUser = await user.remove();
      res.send({ message: "ContactUs User Deleted", user: deleteUser });
    } else {
      res.status(404).send({ message: "ContactUs User Not Found" });
    }
  })
);

module.exports = contactusRouter;