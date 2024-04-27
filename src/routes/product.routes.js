import { Router } from "express";
import { generateProduct } from "../utils/generate-products.js";

const router = Router();

router.get("/", async (req, res) => {
  let products = [];
  const MAX_Products = 200;
  for (let index = 0; index < MAX_Products; index++) {
    products.push(generateProduct());
  }

  return res.json({
    message: `generated products`,
    users: products,
  });
});

export default router;
