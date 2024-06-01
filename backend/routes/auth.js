const express = require("express");
const router = express.Router();
const bcyrpt = require("bcryptjs");
const User = require("../models/User.js");
const generateRandomAvatar = () => {
    const randomAvatar = Math.floor(Math.random()*71);
    return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

//Kullanıcı olusturma (create-register)
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const defaultAvatar = generateRandomAvatar();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email adress is already registered" });
        }
        const hashedPassword = await bcyrpt.hash(password, 10);

        const newUser = await new User({
            username,
            email,
            password: hashedPassword,
            avatar : defaultAvatar,
        })
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." })
    }
})



module.exports = router;