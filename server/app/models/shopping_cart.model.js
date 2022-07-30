// Table or model for shopping cart
/*
 * Fields:
 * user_id (foreign key)
 * product_id (foreign key)
 * quantity
 * created_at
 * updated_at
 */

module.exports = (sequalize, DataTypes) => {
	const ShoppingCart = sequalize.define("shopping_cart", {
		quantity: {
			type: DataTypes.INTEGER,
		},
	});

	return ShoppingCart;
};
