// this module will handle the routes for product API

module.exports = (app) => {
	const product = require("../controller/product.controller");
	var router = require("express").Router();

	// read all products
	router.get("/", product.readProducts);
	// create new product
	router.post("/", product.createProduct);
	// update existing product
	router.put("/:id", product.updateProduct);
	// delete existing product
	router.delete("/:id", product.deleteProduct);

	app.use("/api/products", router);
};
