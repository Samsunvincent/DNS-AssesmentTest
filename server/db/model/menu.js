const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }]
});

module.exports = mongoose.model("Menu", MenuSchema);
