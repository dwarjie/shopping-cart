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
				console.log(response.data);
				setItems(response.data.rows);
				setItemNumber(response.data.count);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// delete the item in the cart
	const deleteItem = (id) => {
		CartService.deleteItem(id)
			.then((response) => {
				console.log(response.data);
				refreshList();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// refresh the list of the cart items
	const refreshList = () => {
		setItemNumber(0);
		setItems([]);
		getUserItems();
	};
	return (
		<div>
			<Navigation />
			<div className="container-fluid w-75 mt-5">
				<h3>Items: {itemNumber}</h3>
				{items &&
					items.map((item, index) => (
						<CartItem key={index} data={item} deleteItem={deleteItem} />
					))}
			</div>
		</div>
	);
};

export default Cart;
