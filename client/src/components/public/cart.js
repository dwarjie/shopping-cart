import React, { useState, useEffect } from "react";

// components
import CartService from "../../services/CartService";
import AuthService from "../../services/AuthService";
import Navigation from "../layout/navigation.layout";
import CartItem from "../layout/cart_item.layout";
import CartCounter from "../../utils/cartCounter";

const Cart = () => {
	const id = AuthService.getUserId();
	const [cartNumber, setCartNumber] = useState(0); // set the cartNumber to 0
	const [itemNumber, setItemNumber] = useState(0);
	const [items, setItems] = useState([]);

	useEffect(() => {
		getUserItems();
	}, []);

	// once the UI is loaded, get the value of cartNumber in the local storage and set it to cartNumber
	useEffect(() => {
		setCartNumber(CartCounter.getItemNumber());
	}, [cartNumber]);

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

	// update the quantity of the cart item
	const updateItem = (id, quantity) => {
		CartService.updateItem(id, { quantity: quantity })
			.then((response) => {
				console.log(response.data);
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
			<Navigation cartNumber={cartNumber} />
			<div className="container-fluid w-75 mt-5">
				<h3>Items: {itemNumber}</h3>
				{items &&
					items.map((item, index) => (
						<CartItem
							key={index}
							data={item}
							deleteItem={deleteItem}
							updateItem={updateItem}
						/>
					))}
			</div>
		</div>
	);
};

export default Cart;
