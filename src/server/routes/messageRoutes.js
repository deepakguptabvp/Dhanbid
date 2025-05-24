

// ===== 📁 src/routes/messageRoutes.js =====
import express from 'express';
import { sendMessage } from '../controllers/messageController.js';
const router = express.Router();

router.post('/:chatId', sendMessage);

export default router;