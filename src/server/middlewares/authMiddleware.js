import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from header
    // console.log(token);
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Verify token
        req.user = decoded; // Store user data in request object
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

export default authMiddleware;