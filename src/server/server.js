// src/server/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Server } from 'socket.io';
import rateLimit from 'express-rate-limit';
import { connectDB } from './utils/db.js';
import http from 'http';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import chatRoutes from './routes/chatRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
dotenv.config({ path: './src/server/.env' });

const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Connect to DB
connectDB();
app.use('/api/auth', authRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/messages', messageRoutes);

// Socket.io handling
io.on('connection', (socket) => {
  console.log('🔌 New client connected:', socket.id);

  socket.on('joinChat', (chatId) => {
    socket.join(chatId);
    console.log(`📥 User joined chat room: ${chatId}`);
  });

  socket.on('sendMessage', ({ chatId, message }) => {
    socket.to(chatId).emit('newMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Routes
app.use('/',(req,res)=> res.json(`<h1>Here is Dhanbid backend ${PORT}</h1>`));
// app.use('/api/auth', authRoutes);

// Error Handler
app.use(errorHandler);
console.log(process.env.NODE_ENV);
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  process.exit(1);
});
