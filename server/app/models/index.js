// Setting up Sequalize

const dbConfig = require("../config/db.config");
const Sequalize = require("sequelize");
const sequelize = new Sequalize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
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
db.Sequalize = Sequelize;
db.sequalize = sequalize;

// models or tables
db.users = require("./users.model")(sequelize, Sequalize);

module.exports = db;
