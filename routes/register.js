const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');



const router = express.Router();
const secretKey= "thisissecretkey";


router.post('/',async(req,res,next)=>{
const{ username,email,password} = req.body
const [rows] = await db.execute('Select * from users WHERE username=? or email = ?',[username,email])

if(rows.length > 0){
    return res.status(400).json("User Already Exists")
}

var hashedpassword = await bcrypt.hash(password,10)
console.log(hashedpassword)

await db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedpassword]);
const token = jwt.sign({ message: 'User registered successfully' },secretKey);
res.status(201).send({ token });
})


module.exports = router;

