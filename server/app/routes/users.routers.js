// this module will handle the routes for users API
// in order to call the API functions

const users = require("../controller/users.controller");
var router = require("express").Router();

// for reading all users
router.get("/", users.readUser);
// for updating a user
router.put("/:id", users.updateUser);
// deleting a user
router.delete("/:id", users.deleteUser);
// for checking a user
router.get("/:id", users.getUser);

// for verifyUser in order to login
router.post("/login", users.verifyUser);
// get the information about the user
router.get("/login", users.getUserInformation);
// for creating a new user
router.post("/register", users.createUser);

module.exports = router;
