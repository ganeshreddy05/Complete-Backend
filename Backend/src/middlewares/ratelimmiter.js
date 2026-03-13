import redisClient from "../config/redis.js";

export const loginRateLimiter = async (req, res, next) => {

  try {

    const ip = req.ip;

    const key = `login_attempt:${ip}`;

    const attempts = await redisClient.incr(key);

    // set TTL when first request happens
    if (attempts === 1) {
      await redisClient.expire(key, 60); // 60 seconds
    }

    // allow only 5 requests per minute
    if (attempts > 5) {
      return res.status(429).json({
        message: "Too many login attempts. Try again after 1 minute."
      });
    }

    next();

  } catch (error) {
    console.log(error);
    next();
  }
};