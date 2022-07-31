// This module will have the CRUD controller for users model

// utils
const Error_Message = require("../utils/err_message.utils");

const db = require("../models");
const Users = db.users;

// Creates a new users
exports.createUser = (req, res) => {
	// get the inputed user information
	// then create the user object
	const user = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		userName: req.body.userName,
		email: req.body.email,
		password: req.body.password,
	};

	// save the user information to the database
	Users.create(user)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || "Some error occured while creating a User."
			);
		});
};
