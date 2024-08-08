import express from "express";
import { login, logout, signup } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/login", logout);

export default router;