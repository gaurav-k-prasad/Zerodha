const mongoose = require("mongoose");
const orderSchema = require("../schemas/orderSchema");

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
