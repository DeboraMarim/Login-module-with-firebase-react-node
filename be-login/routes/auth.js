// routes/auth.js
const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
  const { email, password } = req.body;
 
  res.status(200).send({ message: 'Login successful' });
});

module.exports = router;
