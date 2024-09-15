const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../database/database');
const secretKey = process.env.SECRET_KEY; 

// Register a new user
router.post('/register', async (req, res) => {
  const { phoneNum, firstName, name, email, password } = req.body; 
  try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = 'INSERT INTO users (phoneNum, first_name, name, email, password) VALUES (?, ?, ?, ?, ?)';
      const [result] = await db.query(query, [phoneNum, firstName, name, email, hashedPassword]);
      res.json({ message: 'User registered successfully', userId: result.insertId });
  } catch (error) {
      res.status(500).json({ error: 'User registration failed', details: error });
  }
});

// Login
router.post('/login', async (req, res) => {
    const { phoneNum, password } = req.body;
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE phoneNum = ?', [phoneNum]);
        const user = rows[0];
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
        // Generate a JWT token
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
        console.log(user);
        res.json({ message: 'Login successful', token , user });
    } catch (error) {
        res.status(500).json({ error: 'Login failed', details: error });
    }
});



// Dynamic route for food categories and subcategories
router.get('/food/:foodType', async (req, res) => {
  const { foodType } = req.params;
  let query = 'SELECT * FROM ' + foodType;
  const params = [foodType];
  try {
    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
