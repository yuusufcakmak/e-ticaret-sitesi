const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

// Yeni ürün oluşturma (create)
router.post("/", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
    }
});

// Tüm üsürnleri getir (read-all)
router.get("/", async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." })
    }

});

// belirli bir ürünü getirme (read-single)
router.get("/:productId", async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
           return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." })
    }
});

// Ürün güncelleme (update)
router.put("/:productId", async (req, res) => {
    try {
        const productId = req.params.productId;
        const updates = req.body;
        const existinProduct = await Product .findById(productId);
        if (!existingProduct ) {
            return res.status(404).json({ error: "Product  not found" });
        }
        const updatedProduct  = await Product .findByIdAndUpdate(productId, updates, { new: true });
        res.status(200).json(updatedProduct );
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }
});

module.exports = router;