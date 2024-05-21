const express = require("express");
const router = express.Router();

//diğer rota dosyalarını içe aktarma 
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");

// her rotayı ilgili yolda kullanımı
router.use("/categories",categoryRoute);
router.use("/products",productRoute);

module.exports=router;
