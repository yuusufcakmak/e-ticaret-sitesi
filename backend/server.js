const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://yusel-e-commerce:ZBL8AFSOq03kzxpw@e-commerce.iajdzyy.mongodb.net/")
        console.log("connected to mongoDb");
    } catch (error) {
        throw error;
    }
}
app.get("/", (req, res) => {
    res.send("express.js");
});

app.get("/api", (req, res) => {
    res.send("this is bu api route");
})

app.listen(port, () => {
    connect();
    console.log(`Sunucu ${port} portunda çalışıyor`);
})
