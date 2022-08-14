// Setting up Sequalize
const dbConfig = require("../config/db.config");
const Sequalize = require("sequelize");
const sequalize = new Sequalize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.host,
	dialect: dbConfig.dialect,
	operatorAliases: false,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});

const db = {};
db.Sequalize = Sequalize;
db.sequalize = sequalize;

// models or tables
db.users = require("./users.model")(sequalize, Sequalize);
db.product = require("./product.model")(sequalize, Sequalize);
db.shoppingCart = require("./shopping_cart.model")(sequalize, Sequalize);
db.inventory = require("./inventory.model")(sequalize, Sequalize);

// adding relationships to tables

// table users has one to one relationships with table shopping cart
db.users.hasOne(db.shoppingCart);
db.shoppingCart.belongsTo(db.users, {
	foreignKey: {
		allowNull: false,
	},
});

// table inventory has one to many relationships with table product
db.product.hasMany(db.inventory);
db.inventory.belongsTo(db.product, {
	foreignKey: {
		allowNull: false,
	},
});

// table shoppingCart has one to many relationships with table inventory
db.inventory.hasMany(db.shoppingCart);
db.shoppingCart.belongsTo(db.inventory, {
	foreignKey: {
		allowNull: false,
	},
});

// table shoppingCart has one to many relationships with table product for product information
db.product.hasMany(db.shoppingCart);
db.shoppingCart.belongsTo(db.product, {
	foreignKey: {
		allowNull: false,
	},
});

module.exports = db;
