import React, { useState, useEffect } from "react";

// components
import CartService from "../../services/CartService";
import AuthService from "../../services/AuthService";
import Navigation from "../layout/navigation.layout";
import CartItem from "../layout/cart_item.layout";

const Cart = () => {
	const id = AuthService.getUserId();
	const [itemNumber, setItemNumber] = useState(0);
	const [items, setItems] = useState([]);

	useEffect(() => {
		getUserItems();
	}, []);

	// get the users items in cart
	const getUserItems = () => {
		CartService.getUserItem(id)
			.then((response) => {
				setItems(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<Navigation />
			<div className="container-fluid w-75 mt-5">
				<h3>Items:</h3>
				{items &&
					items.map((item, index) => <CartItem key={index} data={item} />)}
			</div>
		</div>
	);
};

export default Cart;
