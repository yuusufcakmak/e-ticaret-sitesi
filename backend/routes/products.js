const express = require("express");
const router = express.Router();
// Tüm ürünleri getir (read-all)
router.get("/", async  (req,res) => {
    res.send("Ürünler getirildi");
  
})
module.exports=router;