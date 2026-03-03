import express from "express";
import upload from "../middlewares/upload.middleware.js";
import { createProduct } from "../controllers/product.controller.js";

const router = express.Router();

// upload.single("image") → field name must match frontend
router.post("/create", upload.single("image"), createProduct);

export default router;