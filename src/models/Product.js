const { model, Schema } = require("mongoose");

const Product = new Schema(
	{
		title: String,
		price: Number,
		image: String,
		description: String,
		amount: Number,
	},
	{
		timestamps: true,
		versionKey: false,
		collection: "fastify-api",
	}
);

module.exports = model("Product", Product);
