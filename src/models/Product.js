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
	}
);

module.exports = model("Product", Product);
