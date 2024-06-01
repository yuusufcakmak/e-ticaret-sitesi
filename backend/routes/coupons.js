const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

// Yeni kupon oluşturma (create)
router.post("/", async (req, res) => {
    try {

        const newCoupon = new Coupon(req.body);
        await newCoupon.save();
        res.status(201).json(newCoupon);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }
}
);

// Tüm kuponları getir (read-all)
router.get("/", async (req, res) => {
    try {
        const coupons = await Coupon.find()
        res.status(200).json(coupons);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." })
    }

});

// belirli bir kupon getirme (read-single)
router.get("/:couponId", async (req, res) => {
    try {
        const couponId = req.params.couponId;

            const coupon = await Coupon.findById(couponId);
            if (!coupon) {
                return res.status(404).json({ error: "Coupon not found" });  
            }
            res.status(200).json(coupon);
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." })
    }
});

module.exports = router;