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

// adding relationships to tables
db.users.hasOne(db.shoppingCart);
db.shoppingCart.belongsTo(db.users, {
	foreignKey: {
		allowNull: false,
	},
});

db.product.hasMany(db.shoppingCart);
db.shoppingCart.belongsTo(db.product, {
	as: "cart",
	foreignKey: {
		allowNull: false,
	},
});

module.exports = db;
