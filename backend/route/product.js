// const express = require("express");
import express from "express";
const router = express.Router();
import { addProduct, getProducts, getProduct, updateProduct, deleteProduct, getFeaturedProducts, getNewProducts, getProductList } from "../handler/product-handler.js";
// const { addProduct, getProducts, getProduct, updateProduct, deleteProduct } = require("../handler/product-handler")
router.get("", getProductList);
router.get("/new-products", getNewProducts);
router.get("/featured-products", getFeaturedProducts);
router.get("", getProducts);
router.post("", addProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct)
// module.exports = router;
export default router;