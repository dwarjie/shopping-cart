import React, { useState, useEffect } from "react";

// components
import ProductService from "../../services/ProductService";

const Product = () => {
	useEffect(() => {
		getProduct();
	}, []);

	const getProduct = () => {
		ProductService.readAllProducts()
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<h1>Product</h1>
		</div>
	);
};

export default Product;
