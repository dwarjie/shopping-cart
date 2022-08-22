import React, { useState, useEffect } from "react";

// components
import CartService from "../../services/CartService";
import AuthService from "../../services/AuthService";
import Navigation from "../layout/navigation.layout";

const Cart = () => {
	const id = AuthService.getUserId();
	useEffect(() => {
		getUserItems();
	}, []);

	// get the users items in cart
	const getUserItems = () => {
		CartService.getUserItem(id)
			.then((response) => {
				console.log(response.data);
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
			</div>
		</div>
	);
};

export default Cart;
