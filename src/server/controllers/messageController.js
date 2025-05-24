import Chat from '../models/Chat.js';

export const sendMessage = async (req, res) => {
  const { chatId } = req.params;
  const { senderId, text } = req.body;
  try {
    const chat = await Chat.findById(chatId);
    if (!chat) return res.status(404).json({ error: 'Chat not found' });

    const message = { sender: senderId, text, timestamp: new Date() };
    chat.messages.push(message);
    await chat.save();

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};