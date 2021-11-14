const {
	getProducts,
	getProduct,
	newProduct,
	updateProduct,
	deleteProduct,
} = require("../controllers/products.controller");

const routes = [
	{
		method: "GET",
		url: "/products",
		handler: getProducts,
	},
	{
		method: "GET",
		url: "/product/:id",
		handler: getProduct,
	},
	{
		method: "POST",
		url: "/products",
		handler: newProduct,
	},
	{
		method: "PUT",
		url: "/product/:id",
		handler: updateProduct,
	},
	{
		method: "DELETE",
		url: "/product/:id",
		handler: deleteProduct,
	},
];

module.exports = routes;
