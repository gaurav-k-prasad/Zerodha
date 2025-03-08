const { model } = require("mongoose");
const holdingSchema = require("../schemas/holdingSchema.js");

const holdingModel = model("Holding", holdingSchema);

module.exports = holdingModel;
