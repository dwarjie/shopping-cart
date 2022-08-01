// this module will handle the routes of inventory API

module.exports = (app) => {
	const inventory = require("../controller/inventory.controller");
	var router = require("express").Router();

	// read all products in the inventory
	router.get("/", inventory.readInventory);
	// create a new product
	router.post("/", inventory.createProduct);
	// update an existing product in the inventory
	router.put("/:id", inventory.updateProduct);
	// delete an existing product from the inventory
	router.delete("/:id", inventory.deleteProduct);

	app.use("/api/inventory", router);
};
