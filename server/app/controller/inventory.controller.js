// This module contains the controller methods for inventory

// utils
const Error_Message = require("../utils/err_message.utils");

const db = require("../models");
const Inventory = db.inventory;

// Reading all the products in the inventory
exports.readInventory = (req, res) => {
	Inventory.findAll({ include: "product" })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || "Some error occurred while reading the inventory."
			);
		});
};

// Creating a new Product in the inventory
exports.addProduct = (req, res) => {
	const product = {
		quantity: req.body.quantity,
		productId: req.body.productId,
	};

	Inventory.create(product)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || "Some error occured while creating a product."
			);
		});
};

// Update a Product in Inventory
exports.updateProduct = (req, res) => {
	const id = req.params.id;

	Inventory.update(req.body, {
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
				err.message || "Some error occured while updating inventory."
			);
		});
};

// Delete a Product in inventory
exports.deleteProduct = (req, res) => {
	const id = req.params.id;

	Inventory.destroy({ where: { id: id } })
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

// Get the information of a specific product
exports.getProduct = (req, res) => {
	const id = req.params.id;

	Inventory.findByPk(id, { include: "product" })
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				Error_Message(res, 404, `Product id: ${id} does not exist.`);
			}
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.messsage || "Some error occured while retrieving product."
			);
		});
};
