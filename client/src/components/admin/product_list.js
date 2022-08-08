import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components
import ProductService from "../../services/ProductService";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [message, setMessage] = useState("");

	// once the UI is loaded, this function will call readProducts
	useEffect(() => {
		readProducts();
	}, []);

	// read all the products
	// this will be called and will read all the products in the server
	const readProducts = () => {
		ProductService.readProducts()
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
			.catch((err) => {
				console.error(err.message);
			});
	};
	return (
		<div className="container mt-3">
			<h1 className="text-center">Product List</h1>
		</div>
	);
};

export default ProductList;
