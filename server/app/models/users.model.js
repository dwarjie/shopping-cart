// Table model for users table
/*
 * Fields:
 * firstName
 * lastName
 * email
 * password
 * created_at
 * updated_at
 */

module.exports = (sequalize, DataTypes) => {
	const Users = sequalize.define("users", {
		firstName: {
			type: DataTypes.STRING,
		},
		lastName: {
			type: DataTypes.STRING,
		},
		userName: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
	});

	return Users;
};
