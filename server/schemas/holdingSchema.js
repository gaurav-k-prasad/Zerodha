const { Schema } = require("mongoose");

const holdingSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	qty: {
		type: Number,
		required: true,
		min: 0,
	},
	avg: {
		type: Number,
	},
	price: {
		type: Number,
	},
	net: {
		type: String,
	},
	day: {
		type: String,
	},
});

module.exports = holdingSchema;
