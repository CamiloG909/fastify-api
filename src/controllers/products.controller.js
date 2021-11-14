const Product = require("../models/Product");
const productsCtrl = {};

productsCtrl.getProducts = async (req, reply) => {
	const response = await Product.find();
	reply.send(response);
};

productsCtrl.getProduct = async (req, reply) => {
	const response = await Product.findById(req.params.id);
	reply.send(response);
};

productsCtrl.newProduct = async (req, reply) => {
	const newProduct = new Product(req.body);
	await newProduct.save();
	reply.code(201).send(newProduct);
};

productsCtrl.updateProduct = async (req, reply) => {
	const updatedProduct = await Product.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);
	reply.send(updatedProduct);
};

productsCtrl.deleteProduct = async (req, reply) => {
	await Product.findByIdAndDelete(req.params.id);
	reply.code(204).send({ message: "Product deleted" });
};

module.exports = productsCtrl;
