// this module will handle the routes for users API
// in order to call the API functions

const users = require("../controller/users.controller");
var router = require("express").Router();

// for reading all users
router.get("/", users.readUser);
// for creating a new user
router.post("/", users.createUser);
// for updating a user
router.put("/:id", users.updateUser);
// deleting a user
router.delete("/:id", users.deleteUser);
// for checking a user
router.get("/:id", users.checkUser);

// for verifyUser in order to login
router.get("/login", users.verifyUser);

module.exports = router;
