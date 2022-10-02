const mongoose = require("mongoose");

mongoose
	.connect(process.env.FASTIFY_API_MONGODB_URI)
	.then(() => console.log("MongoDB connected..."))
	.catch((err) => console.log(err));
