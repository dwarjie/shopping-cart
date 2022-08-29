import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import AuthService from "../../services/AuthService";
import ProductService from "../../services/ProductService";
import CartCounter from "../../utils/cartCounter";
import ItemCard from "../layout/item_card.layout";
import Navigation from "../layout/navigation.layout";

const Product = () => {
	const [cartNumber, setCartNumber] = useState(0); // set the cartNumber to 0
	const [products, setProducts] = useState([]);
	const userId = AuthService.getUserId();

	// once the UI is loaded, get the value of cartNumber in the local storage and set it to cartNumber
	useEffect(() => {
		setCartNumber(CartCounter.getItemNumber());
	}, [cartNumber]);

	useEffect(() => {
		console.log(CartCounter.getItemNumber());
		getProduct();
	}, []);

	// get all the products
	const getProduct = () => {
		ProductService.readAllProducts()
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<Navigation cartNumber={cartNumber} />
			<div className="container-fluid mt-3">
				<h1 className="text-center">Product</h1>
				<div className="row">
					{products &&
						products.map((product, index) => (
							<ItemCard key={index} data={product} userId={userId} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Product;
