// Table model for product
/*
 * Fields:
 * name
 * desc
 * price
 * created_at
 * updated_at
 */

module.exports = (sequalize, DataTypes) => {
	const Product = sequalize.define("product", {
		name: {
			type: DataTypes.STRING,
		},
		desc: {
			type: DataTypes.STRING,
		},
		price: {
			type: DataTypes.DECIMAL,
		},
	});

	return Product;
};
