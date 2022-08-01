// This module contains the controller methods for product

// utils
const Error_Message = require("../utils/err_message.utils");

const db = require("../models");
const Product = db.product;

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
