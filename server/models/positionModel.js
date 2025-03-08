const mongoose = require("mongoose");
const positionSchema = require("../schemas/positionSchema");

const positionModel = mongoose.model("Position", positionSchema);

module.exports = positionModel;
