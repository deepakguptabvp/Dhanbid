import Chat from '../models/Chat.js';

export const createChat = async (req, res) => {
  const { tenderId, bidId, buyerId, supplierId } = req.body;
  try {
    const existing = await Chat.findOne({ tenderId, bidId });
    if (existing) return res.status(200).json(existing);

    const chat = await Chat.create({ tenderId, bidId, buyerId, supplierId, messages: [] });
    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getChatsByRole = async (req, res) => {
  const { userId, role } = req.query;
  try {
    const chats = await Chat.find(role === 'buyer' ? { buyerId: userId } : { supplierId: userId })
      .populate('buyerId supplierId tenderId bidId');
    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
