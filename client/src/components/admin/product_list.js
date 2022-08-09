import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";

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

	const btnDelete = () => {};
	return (
		<div className="container mt-3">
			<h1 className="text-center">Product List</h1>
			<div>
				<ul className="list-group">
					{products &&
						products.map((product) => (
							<div
								className="list-group-item d-flex flex-row align-items-center justify-content-between"
								key={product.id}
							>
								<p className="m-0">{`${product.name}`}</p>
								<div
									className="btn-group"
									role="group"
									aria-label="Basic example"
								>
									<Link
										to={`/admin/products/${product.id}`}
										type="button"
										className="btn btn-primary"
									>
										<PencilSquare />
									</Link>
									<button
										type="button"
										className="btn btn-danger"
										onClick={() => {
											btnDelete(product.id);
										}}
									>
										<TrashFill />
									</button>
								</div>
							</div>
						))}
				</ul>
			</div>
			<Link to={`/admin`} type="button" className="btn btn-secondary mt-3">
				Back
			</Link>
		</div>
	);
};

export default ProductList;
