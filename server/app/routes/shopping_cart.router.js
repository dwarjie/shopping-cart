// this module will handle the routes for shopping cart API

module.exports = (app) => {
	const cart = require("../controller/shopping_cart.controller");
	var router = require("express").Router();

	// read all items in shopping cart
	router.get("/", cart.readCart);
	// add new item to cart
	router.post("/", cart.addItem);
	// update item in shopping cart
	router.put("/:id", cart.updateItem);
	// delete item from cart
	router.delete("/:id", cart.deleteItem);

	app.use("/api/cart", router);
};
