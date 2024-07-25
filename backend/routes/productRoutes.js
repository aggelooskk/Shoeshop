// routes/productRoutes.js
import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

// Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
