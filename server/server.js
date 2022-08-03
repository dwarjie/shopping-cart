// Setting up the server

const express = require("express");
const cors = require("cors");
const app = express();

// import express routes
const users = require("./app/routes/users.routers");
const products = require("./app/routes/product.router");
const inventory = require("./app/routes/inventory.router");

const corsOptions = {
	origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require the database and database models
const db = require("./app/models");
const { application } = require("express");
db.sequalize
	.sync()
	.then(() => {
		console.log("Synced");
	})
	.catch((err) => {
		console.log(`Failed to sync database: ${err}`);
	});

// to drop and sync the database tables again
// db.sequalize.sync({ force: true }).then(() => {
// 	console.log("Dropped and re-synced database");
// });

app.get("/", (req, res) => {
	res.json({ message: "Server testing." });
});

app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/inventory", inventory);
require("./app/routes/shopping_cart.router")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
