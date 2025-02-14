const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../database/database');
const secretKey = process.env.SECRET_KEY; 
const getCartOrCreate =  require('../utils/helperFunction')

// Register a new user
router.post('/register', async (req, res) => {
  const { phoneNum, firstName, name, email, password } = req.body; 
  try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = 'INSERT INTO users (phonenum, first_name, name, email, password) VALUES (?, ?, ?, ?, ?)';
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
      res.json({ message: 'Login successful', token , user });
    } catch (error) {
        res.status(500).json({ error: 'Login failed', details: error });
    }
});

// Dynamic route for food categories and subcategories
router.get('/food/:foodType', async (req, res) => {
  const { foodType } = req.params;

  // Use parameterized query to prevent SQL injection
  let query = 'SELECT item.* FROM item JOIN category ON item.category_id = category.category_id WHERE category.name = ?';
  const params = [foodType];

  try {
    const [rows] = await db.query(query, params); 
    res.json(rows);
  } catch (err) {
    console.error('Database Error:', err.message); 
    res.status(500).json({ error: err.message });
  }
});

router.post('/addToCart', async (req, res) => {
  const {user_id, item_id, quantity, des, price} = req.body;
  console.log(user_id, item_id, quantity, des, price)
  try {
    const cart_id = await getCartOrCreate(user_id) ;
    console.log(cart_id);
    const query = 'INSERT INTO cart_item (cart_id, item_id , quantity, des, price) VALUES (?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [cart_id, item_id, quantity, des, price]);
    res.json({message : 'Add to cart successfully', cart_id : result.insertId});
  }
  catch (error) {
    res.status(500).json({ error: 'Add to cart failed', details: error });
  }

})

router.get('/getCartNum/:user_id', async(req, res) => {
  const {user_id} = req.params ;
  console.log(user_id);
  try{
    const cart_id = await getCartOrCreate(user_id) ;
    console.log(cart_id);
    const query = 'SELECT COUNT(*) as cartNum FROM cart_item WHERE cart_id = ?' ;
    const [result] = await db.query(query, [cart_id]) ;
    res.json({cartNum : result[0].cartNum}) ;
  }
  catch(error){
    res.status(500).json({error : 'Get cart number failed', details : error}) ;
  }
})

module.exports = router;
