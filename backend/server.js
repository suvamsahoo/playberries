let express = require("express");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
let path = require("path");

const userRouter = require("./routers/userRouter");
const FoodProductRouter = require("./routers/FoodProductRouter");
const contactusRouter = require("./routers/contactusRouter");
const GalleryProductRouter = require("./routers/GalleryProductRouter");
const uploadRouter = require("./routers/uploadRouter");
const orderRouter = require("./routers/orderRouter");

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const DB = process.env.MONGODB_URL;
const DB = "mongodb+srv://suvamsahoo:suvamsahoo@cluster0.ucd4r.mongodb.net/pbdatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`DB connection successful`);
  })
  .catch((error) => {
    console.log(`${DB} is getting some error ${error}`);
  });

//Router-:
app.use("/api/uploads", uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/foodproducts", FoodProductRouter);
app.use("/api/orders", orderRouter);
app.use("/api/contactus", contactusRouter);
app.use("/api/gallery", GalleryProductRouter);

const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "/uploads")));

app.use(express.static(path.join(dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(dirname, "/frontend/build/index.html"))
);

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

//Error catch middleware, 'expressAsyncHandler' npm module redirect all error to here-:
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
