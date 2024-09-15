require('dotenv').config()
const express = require('express');
const cors = require('cors');
const userRoutes = require('./controller/user_controller'); // Adjust the path as needed
const path = require('path');

const app = express();

app.use(cors());

//config request body
app.use(express.json());

//route declare
app.use('/api', userRoutes);

// Serve static files from the assets directory
app.use(express.static(path.join(__dirname, '..', 'Front_end', 'assets')));

const PORT = process.env.PORT || 3000;

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token is invalid' });
        req.user = user;
        next();
    });
};

// Protected route example
app.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));