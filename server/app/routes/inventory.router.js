// this module will handle the routes of inventory API

const inventory = require("../controller/inventory.controller");
var router = require("express").Router();

// read all products in the inventory
router.get("/", inventory.readInventory);
// create a new product
router.post("/", inventory.addProduct);
// update an existing product in the inventory
router.put("/:id", inventory.updateProduct);
// delete an existing product from the inventory
router.delete("/:id", inventory.deleteProduct);
// read a specific product
router.get("/:id", inventory.getProduct);

module.exports = router;
