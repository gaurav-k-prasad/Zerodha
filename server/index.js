require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 3002 | process.env.PORT;

const uri = process.env.MONGO_URL;
const holdingModel = require("./models/holdingModel");
const positionModel = require("./models/positionModel");

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

app.get("/holdings", async (req, res) => {
	const data = await holdingModel.find({});
	console.log(data);
	res.json(data);
});

app.get("/positions", async (req, res) => {
	const data = await positionModel.find({});
	res.json(data);
});

app.listen(port, () => {
	console.log(`App listening on port: ${port}`);
	mongoose.connect(uri);
});
