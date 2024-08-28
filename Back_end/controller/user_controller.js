// In userController.js

const express = require('express');
const router = express.Router();
const db = require('../database/database');

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
