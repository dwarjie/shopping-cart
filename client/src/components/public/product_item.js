import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// component
import ProductPicture from "../../assets/product.jpg";
import ProductService from "../../services/ProductService";
import Navigation from "../layout/navigation.layout";

const ProductItem = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		getItem(id);
	}, [id]);

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

	const handleInputChange = (event) => {
		const quantity = event.target.value;
		setQuantity(quantity);
	};

	return (
		<div>
			<Navigation />
			<div className="container-fluid mt-3 d-flex flex-column flex-lg-row gap-5">
				<div className="container col col-lg-5 d-block mx-auto">
					<img
						src={ProductPicture}
						alt="Product"
						className="img-fluid img-thumbnail mb-1 mb-lg-0"
					/>
				</div>
				<div className="container col col-lg-5">
					<h1>
						<strong>{product.name}</strong>
					</h1>
					<h3 className="mb-3">&#8369; {product.price}</h3>
					<p className="lead">{product.desc}</p>
					<label htmlFor="quantity">Quantity:</label>
					<input
						type="number"
						name="quantity"
						id="quantity"
						className="form-control w-25 mb-3"
						value={quantity}
						onChange={handleInputChange}
					/>
					<button className="btn btn-primary w-100">Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
