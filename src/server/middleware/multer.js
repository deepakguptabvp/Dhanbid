// middleware/multer.js
import multer from "multer";

const storage = multer.memoryStorage(); // Keep files in memory
export const upload = multer({ storage });
