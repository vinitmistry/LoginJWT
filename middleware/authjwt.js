const express = require('express');
const jwt = require('jsonwebtoken');
const secretKey = 'thisissecretkey';


const TokenAuth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json('Access Denied');
    }
    try {
        const verified = jwt.verify(token, secretKey);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json('Invalid Token');
    }
}


module.exports = TokenAuth;