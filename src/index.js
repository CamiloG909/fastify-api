require("./utils/database");
require("dotenv").config();
const fastify = require("fastify")({
	logger: true,
});
const swagger = require("./utils/swagger");
const productsRoutes = require("./routes/products.routes");

fastify.register(require("fastify-swagger"), swagger.options);

fastify.get("/", (req, rep) => {
	rep.send({ hello: "world" });
});

productsRoutes.forEach((route) => {
	fastify.route(route);
});

const port = process.env.PORT || 4000;

const start = async () => {
	await fastify.listen(port);
	fastify.log.info(`server listening on ${fastify.server.address().port}`);
};

start();
