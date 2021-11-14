require("./utils/database");
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

const start = async () => {
	await fastify.listen(4000);
	fastify.log.info(`server listening on ${fastify.server.address().port}`);
};

start();
