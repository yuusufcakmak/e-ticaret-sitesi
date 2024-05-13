const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongoDb");
    } catch (error) {
        throw error;
    }
}
app.get("/", (req, res) => {
    res.send("express.js");
});

app.get("/api", (req, res) => {
    res.send("this is api route");
})

app.listen(port, () => {
    connect();
    console.log(`Sunucu ${port} portunda çalışıyor`);
})
