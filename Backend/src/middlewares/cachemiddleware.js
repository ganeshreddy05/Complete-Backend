import redisClient from "../config/redis.js";

export const cacheMiddleware = (key) => {
  return async (req, res, next) => {

    const data = await redisClient.get(key);

    if (data) {
      return res.json(JSON.parse(data));
    }

    next();
  };
};