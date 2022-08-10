// this component is for updating and viewing the content of a product
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductPicture from "../../assets/product.jpg";
// component
import ProductService from "../../services/ProductService";

const Product = () => {
	const { id } = useParams();
	let navigate = useNavigate();
	// initial state of product information
	const initialProductState = {
		id: null,
		name: "",
		desc: "",
		price: 0,
		image: "",
	};
	const [product, setProduct] = useState(initialProductState);
	const [message, setMessage] = useState("");

	// this function will run once UI is loaded
	useEffect(() => {
		if (id) {
			getProduct(id);
		}
	}, [id]);

	// this function will be called by useEffect
	// this will get the product information base on the id url
	const getProduct = (id) => {
		ProductService.getProduct(id)
			.then((response) => {
				setProduct(response.data);
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// this function will update the product information
	const updateProduct = (event) => {
		event.preventDefault();

		ProductService.updateProduct(product.id, product)
			.then((response) => {
				console.log(response.data);
				setMessage("Product updated successfully");
				getProduct(id);
			})
			.catch((err) => {
				console.log(err);
				setMessage("Product update failed");
			});
	};

	// this function will go back to the product list
	const cancelUpdate = () => {
		navigate("/admin/products");
	};

	// this function will handle the onChange event of inputs forms
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setProduct({ ...product, [name]: value });
	};

	return (
		<div className="container mt-3">
			<h1 className="text-center">View/Edit Product</h1>
			<form className="d-flex flex-column flex-lg-row-reverse gap-lg-5">
				<div className="form-group mb-3 col-lg-4">
					<img
						src={ProductPicture}
						alt="Product"
						className="img-thumbnail img-fluid"
					/>
				</div>
				<div className="form-group mb-3 w-100">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						className="form-control"
						value={product.name}
						onChange={handleInputChange}
					/>
					<label htmlFor="price">Price:</label>
					<input
						type="number"
						id="price"
						name="price"
						className="form-control"
						value={product.price}
						onChange={handleInputChange}
					/>
					<label htmlFor="desc">Description:</label>
					<textarea
						id="desc"
						name="desc"
						className="form-control"
						rows="3"
						value={product.desc}
						onChange={handleInputChange}
					/>
				</div>
			</form>
			<div className="form-group d-grid d-md-block gap-2 mb-3 text-end">
				<button
					type="submit"
					className="mx-md-2 btn btn-primary"
					onClick={updateProduct}
				>
					Update
				</button>
				<button className="btn btn-secondary" onClick={cancelUpdate}>
					Cancel
				</button>
				<p className="my-2">{message}</p>
			</div>
		</div>
	);
};

export default Product;
