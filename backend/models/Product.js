const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
    {
        text: { type: String, required: true },
        rating: { type: Number },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    }
)

const ProductSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        img: [{ type: String, required: true }],
        reviews: [ReviewSchema]
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;