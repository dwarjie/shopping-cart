import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import ProductService from "../../services/ProductService";
import ItemCard from "../layout/item_card.layout";
import Navigation from "../layout/navigation.layout";

const Product = () => {
	let location = useLocation();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProduct();
	}, []);

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
			<Navigation />
			<div className="container-fluid mt-3">
				<h1 className="text-center">Product</h1>
				<div className="row">
					{products &&
						products.map((product, index) => (
							<ItemCard
								key={index}
								data={product}
								userId={location.state.userId}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Product;
