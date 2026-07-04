const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
router.post("/register", async (req, res) => {
try{
const {name, email, password, role} = req.body;
    const existingUser = await User.findOne({email });
    if(existingUser){
        return res.status(400).json({
            message: "User already exists"
        });
    }
    const hashedPassword = await bcrypt.hash(password,10);
    //if two user choose same password also bcrypt will create different hash 
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    });
    res.status(201).json({
        message: "User registered successfully",
  
    });
}
catch(err){
    res.status(500).json({
        message: err.message
    });
}
});

router.post("/login", async (req, res) => {
    try{
    const {email, password} = req.body;
    const existingUser = await User.findOne({email});
    if(!existingUser){
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }
        const isMatch = await bcrypt.compare(
            password,
            existingUser.password

        );
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid password"
            });
        }
        const token = jwt.sign(
            {
                id: existingUser._id,
                role: existingUser.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );
res.status(200).json({
    message: "Login successfully",
    token,
    user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role
    }
});
}
catch(err){
    res.status(500).json({
        message: err.message
    });
}
});
module.exports = router;