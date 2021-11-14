const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/fastify-products")
	.then(() => console.log("MongoDB connected..."))
	.catch((err) => console.log(err));
