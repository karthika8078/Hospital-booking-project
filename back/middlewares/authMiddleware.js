// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const adminAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(403).send('No token provided.');

    const token = authHeader.split(' ')[1]; // Extract the token after 'Bearer'
    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(500).send('Failed to authenticate token.');
        if (decoded.role !== 'admin') return res.status(403).send('Admin access required.');
        req.user = decoded; // Store the decoded token in the request object
        next();
    });
};

module.exports = { adminAuth };


