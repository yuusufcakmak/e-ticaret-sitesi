const express = require("express");
const router = express.Router();
// Tüm kategorileri getir (read-all)
router.get("/", async  (req,res) => {
    res.send("Kategoriler getirildi");
  
})
module.exports=router;