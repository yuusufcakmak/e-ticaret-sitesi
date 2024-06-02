const express = require("express");
const router = express.Router();

//diğer rota dosyalarını içe aktarma
const productRoute = require("./products.js");
const authRoute = require("./auth.js");
const categoryRoute = require("./categories.js");
const couponRoute = require("./coupons.js");
const userRoute = require("./users.js");

// her rotayı ilgili yolda kullanımı
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/coupons", couponRoute);
router.use("/users", userRoute);

module.exports = router;
// postman kurulumu tamamlandı
