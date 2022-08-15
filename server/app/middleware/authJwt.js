// this function will Authenticate if a token is provided
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");

const verifyToken = (req, res, next) => {
	const authHeader = req.headers["authorization"]; // get the token from the request header
	const token = authHeader && authHeader.split(" ")[1];

	// check if the token exists
	if (token === null) {
		return res.status(403).send({
			message: "No token provided",
		});
	}

	jwt.verify(token, config.secret, (err, data) => {
		if (err) {
			return res.status(401).send({
				message: "Unauthorized",
			});
		}

		req.id = data.id;
		next();
	});
};

const AuthJwt = {
	verifyToken,
};

module.exports = AuthJwt;
