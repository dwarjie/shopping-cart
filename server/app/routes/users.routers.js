// this module will handle the routes for users API
// in order to call the API functions

module.exports = (app) => {
	const users = require("../controller/users.controller");
	var router = require("express").Router();

	// for creating a new user
	router.post("/", users.createUser);
	// for checking a user
	router.get("/:id", users.checkUser);

	app.use("/api/users", router);
};
