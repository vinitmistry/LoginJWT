const express= require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const db = require('../db')




const router = express.Router();
const secretKey= "thisissecretkey";


router.post('/',async(req,res,next)=>{
    try {
        const {username,password} = req.body
        const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) {
          return res.status(400).send('Invalid credentials');
        }
    
     
        const validPassword = await bcrypt.compare(password, rows[0].password);
        if (!validPassword) {
          return res.status(400).send('Invalid credentials');
        }
    
        const token = jwt.sign({ username: rows[0].username }, secretKey, { expiresIn: '1h' });
    
        res.json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }
})
module.exports = router