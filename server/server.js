// Setting up the server

const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
	origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require the database and database models
const db = require("./app/models");
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

require("./app/routes/users.routers")(app);
require("./app/routes/product.router")(app);
require("./app/routes/inventory.router")(app);
require("./app/routes/shopping_cart.router")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
