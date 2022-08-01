// This module contains the controller methods for product

// utils
const Error_Message = require("../utils/err_message.utils");

const db = require("../models");
const Product = db.product;

// Reading all the products
exports.readProducts = (req, res) => {
	Product.findAll()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || "Some error occurred while reading the products."
			);
		});
};

// Creating a new Product
exports.createProduct = (req, res) => {
	const product = {
		name: req.body.name,
		desc: req.body.desc,
		price: req.body.price,
		image: req.body.image,
	};

	Product.create(product)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || "Some error occured while creating product."
			);
		});
};

// Update a Product
exports.updateProduct = (req, res) => {
	const id = req.params.id;

	Product.update(req.body, {
		where: { id: id },
	})
		.then((row) => {
			if (row == 1) {
				res.send({ message: 1 });
			} else {
				res.send({ message: 0 });
			}
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || "Some error occured while updating product."
			);
		});
};

// Delete a Product
exports.deleteProduct = (req, res) => {
	const id = req.params.id;

	Product.destroy({ where: { id: id } })
		.then((row) => {
			if (row == 1) {
				res.send({ message: 1 });
			} else {
				res.send({ message: 0 });
			}
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.messsage || "Some error occured while deleting product."
			);
		});
};
