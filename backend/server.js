const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("express.js");
});

app.get("/api", (req,res) => {
  res.send("this is bu api route");
})

app.listen(5000, () => {
  console.log("Sunucu ${5000} portunda çalışıyor");
})
