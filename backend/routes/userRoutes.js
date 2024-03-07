import express from "express";
import { UserController } from "../controllers/userController.js";

const router = express.Router();

//register new user
router.post("/register", UserController.registerUser);

//register new user
router.post("/login", UserController.loginUser);

export default router