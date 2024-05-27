const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

// Yeni Category oluşturma (create)
router.post("/", async (req, res) => {
    try {
        const { name, img } = req.body;

        const newCategory = new Category({ name, img });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        console.log(error)
    }
}
)

// Tüm kategorileri getir (read-all)
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server error."})
    }

})
module.exports = router;