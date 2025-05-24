import express from 'express';
import { createChat, getChatsByRole } from '../controllers/chatController.js';
const router = express.Router();

router.post('/', createChat);
router.get('/', getChatsByRole);

export default router;
