// routes/tenders.js
import express from "express";
import {
  createTender,
  getAllTenders,
  getTenderById,
  getAllMyTenders,
  updateTender,
  deleteTender
} from "../controllers/tenderController.js";

import { upload } from "../middleware/multer.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/",authMiddleware, upload.array("files"), createTender);
router.get("/", getAllTenders);
router.get("/my", authMiddleware, getAllMyTenders);
router.get("/:id", getTenderById);
router.patch("/:id",authMiddleware, upload.array("files"), updateTender);
router.delete("/:id",authMiddleware, deleteTender);

export default router;
