import express from "express";
import { sendOtp, verifyOtp } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.get("/check-user", authMiddleware, async(req,res)=>{
    let user = await User.findById(req.user.id);
    res.status(200).json(user);
});

export default router;