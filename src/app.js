import express from "express";
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";

const PORT_APP = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log("🚀 ~ file: app.js:6 ~ app.listen ~ PORT_APP:", PORT_APP);
});
