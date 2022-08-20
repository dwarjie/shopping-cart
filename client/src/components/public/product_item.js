import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// component
import ProductService from "../../services/ProductService";
import Navigation from "../layout/navigation.layout";

const ProductItem = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		getItem(id);
	}, []);

	const getItem = (id) => {
		ProductService.getItem(id)
			.then((response) => {
				setProduct(response.data);
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<Navigation />
		</div>
	);
};

export default ProductItem;
