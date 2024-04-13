// Import required modules
const jwt = require('jsonwebtoken');

// JWT secret key (replace this with your own secret)
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
    // Get token from request headers
    const token = req.headers['authorization'];

    // Check if token is provided
    if (!token) {
        return res.status(403).json({ message: 'Token is not provided' });
    }

    // Verify token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.userId = decoded.userId; // Attach userId to request object
        next();
    });
};
