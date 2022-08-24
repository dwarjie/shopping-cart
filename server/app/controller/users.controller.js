// This module will have the CRUD controller for users model

// utils
const Error_Message = require("../utils/err_message.utils");

const db = require("../models");
const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
const Users = db.users;

// Read all users
exports.readUser = (req, res) => {
	Users.findAll()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || "Some error occurred while reading users."
			);
		});
};

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

// Update users
exports.updateUser = (req, res) => {
	// get the id of the user
	const id = req.params.id;

	Users.update(req.body, {
		where: { id: id },
	})
		.then((row) => {
			// check if affected row is equal to 1
			// if 1 = success else if 0 means failed
			if (row == 1) {
				res.send({ message: 1 });
			} else {
				res.send({ message: 0 });
			}
		})
		.catch((err) => {
			Error_Message(res, 500, err.message || "Error updating user.");
		});
};

// Deleting user
exports.deleteUser = (req, res) => {
	const id = req.params.id;

	Users.destroy({ where: { id: id } })
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
				err.message || "Error occured while deleting user."
			);
		});
};

// get one user information using id
exports.getUser = (req, res) => {
	// get the id of the url
	const id = req.params.id;

	Users.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				Error_Message(res, 404, `User id: ${id} does not exist.`);
			}
		})
		.catch((err) => {
			Error_Message(res, 500, err.message || `Error checking user id: ${id}.`);
		});
};

// this function will check if username exists in the database
// then return the user information
exports.verifyUser = (req, res) => {
	Users.findOne({ where: { userName: req.body.username } })
		.then((data) => {
			// if username does not exist, return user does not exist
			if (!data) {
				return res.status(404).send({
					message: `User does not exist`,
				});
			}
			// check if inputed password matched the saved password
			if (req.body.password !== data.password) {
				return res.status(401).send({
					accessToken: null,
					message: "Invalid password",
				});
			}

			// sign token using jwt
			var token = jwt.sign({ id: data.id }, config.secret);

			const user = {
				id: data.id,
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
				accessToken: token,
			};

			res.json(user);
		})
		.catch((err) => {
			Error_Message(
				res,
				500,
				err.message || `Error checking user: ${req.body.userName}.`
			);
		});
};

// get users information
// this function will get the users item cart number and more?
exports.getUserInformation = async (req, res) => {
	try {
		const [result, metadata] = await db.sequalize.query("SELECT * FROM users");
		res.send(result);
	} catch (err) {
		Error_Message(res, 500, err.message);
	}
};
