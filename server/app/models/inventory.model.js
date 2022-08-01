// Table model for product inventory table
/*
 * Fields:
 * quantity
 * product_id foreign key
 */

module.exports = (sequalize, DataTypes) => {
	const Inventory = sequalize.define("product_inventory", {
		quantity: {
			type: DataTypes.INTEGER,
		},
	});

	return Inventory;
};
