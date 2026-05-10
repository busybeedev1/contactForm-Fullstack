import { createUSer } from "../controllers/authController.js";
import express from "express";

const router = express.Router();

router.post("/auth", createUSer);

export default router;