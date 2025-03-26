// require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 3002 || process.env.PORT;

const uri = process.env.MONGO_URL;
const holdingModel = require("./models/holdingModel");
const positionModel = require("./models/positionModel");
const orderModel = require("./models/orderModel");

/*
const { holdings, positions } = require("./data/data");

app.get("/add-holdings", async (req, res) => {
	await holdingModel.insertMany(holdings);
    res.send("Done")
});

app.get("/add-positions", async (req, res) => {
    await positionModel.insertMany(positions);
    res.send("Done")
})
*/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

app.get("/holdings", async (req, res) => {
	const data = await holdingModel.find({});
	res.json(data);
});

app.get("/positions", async (req, res) => {
	const data = await positionModel.find({});
	res.json(data);
});

app.get("/orders", async (req, res) => {
	const data = await orderModel.find({});
	res.json(data);
});

app.post("/newOrder", async (req, res) => {
	let newOrder = new orderModel({
		name: req.body.name,
		qty: req.body.qty,
		price: req.body.price,
		mode: req.body.mode,
	});

	newOrder.save();
	res.json(newOrder);
});

app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`App listening on port: ${port}`);
	mongoose.connect(uri);
});
