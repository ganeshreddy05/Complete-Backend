import redisClient from "../config/redis.js";
import Product from "../models/Productmodel.js";

export const getAllProducts = async (req, res) => {
  try {

    const cacheKey = "all_products";

    // 1️⃣ Check Redis
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
      console.log("Serving from cache");
      return res.json(JSON.parse(cachedData));
    }

    // 2️⃣ Fetch from database
    const products = await Product.find();

    // 3️⃣ Store in Redis with TTL
    await redisClient.setEx(
      cacheKey,
      3600,
      JSON.stringify(products)
    );

    res.json(products);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};