import express from "express";
import { loginUser } from "../controllers/auth.controller.js";
import { loginRateLimiter } from "../middlewares/ratelimmiter.js";

const router = express.Router();

router.post("/login", loginRateLimiter, loginUser);

export default router;