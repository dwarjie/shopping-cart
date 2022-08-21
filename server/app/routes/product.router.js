// this module will handle the routes for product API

const middleware = require("../middleware/authJwt");
const product = require("../controller/product.controller");
const cart = require("../controller/shopping_cart.controller");
var router = require("express").Router();

// read all products
router.get("/", middleware.verifyToken, product.readProducts);
// create new product
router.post("/", product.createProduct);
// update existing product
router.put("/:id", product.updateProduct);
// delete existing product
router.delete("/:id", product.deleteProduct);
// check for a product
router.get("/:id", product.checkProduct);

// shopping cart route
router.post("/:id", cart.addItem);

module.exports = router;
