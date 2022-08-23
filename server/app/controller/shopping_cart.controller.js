// This module contains the controller methods for shopping cart

// utils
// import Error_Message from "../utils/err_message.utils";
const Error_Message = require("../utils/err_message.utils");

const db = require("../models");
const Cart = db.shoppingCart;

// Reading all the products in the shopping cart
exports.readCart = (req, res) => {
	Cart.findAll({ include: ["product"] })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || "Some error occurred while reading the shopping cart."
			);
		});
};

// Creating a new Product in the cart
exports.addItem = (req, res) => {
	const item = {
		quantity: req.body.quantity,
		userId: req.body.userId,
		productId: req.body.productId,
	};

	Cart.create(item)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || "Some error occured while adding an item."
			);
		});
};

// Update an item in the shopping cart
exports.updateItem = (req, res) => {
	const id = req.params.id;

	Cart.update(req.body, {
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
				err.message ||
					"Some error occured while updating item in shopping cart."
			);
		});
};

// Delete a Product in inventory
exports.deleteItem = (req, res) => {
	const id = req.params.id;

	Cart.destroy({ where: { id: id } })
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
				err.messsage || "Some error occured while deleting item."
			);
		});
};

// get the items in the cart of user using userId
exports.getUserItems = (req, res) => {
	const userId = req.params.id;
	Cart.findAndCountAll({ where: { userId: userId }, include: ["product"] })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || "Some error occured while reading user cart"
			);
		});
};
