import React, { useState, useEffect } from "react";
import { Link, userNavigate } from "react-router-dom";

// components
import ProductService from "../../services/ProductService";
import ItemCard from "../layout/item_card.layout";
import Navigation from "../layout/navigation.layout";

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
			<Navigation />
			<div className="container-fluid mt-3">
				<h1 className="text-center">Product</h1>
				<div className="d-grid text-center">
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
				</div>
			</div>
		</div>
	);
};

export default Product;
