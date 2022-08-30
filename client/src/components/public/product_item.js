import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

// component
import ProductPicture from "../../assets/product.jpg";
import ProductService from "../../services/ProductService";
import CartSevice from "../../services/CartService";
import Navigation from "../layout/navigation.layout";
import CartCounter from "../../utils/cartCounter";

const ProductItem = () => {
	let location = useLocation();
	const { id } = useParams();
	const [cartNumber, setCartNumber] = useState(0); // set the cartNumber to 0
	const [product, setProduct] = useState([]);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		getItem(id);
	}, [id]);

	// once the UI is loaded, get the value of cartNumber in the local storage and set it to cartNumber
	useEffect(() => {
		setCartNumber(CartCounter.getItemNumber());
	}, [cartNumber]);

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

	// add a new item in the cart
	const addItem = () => {
		CartSevice.addItem({
			quantity: quantity,
			userId: location.state.userId,
			productId: product.id,
		})
			.then((response) => {
				console.log(response.data);
				getItemNumber();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// get the updated cart item number
	const getItemNumber = () => {
		CartSevice.getUserItem(location.state.userId)
			.then((response) => {
				console.log(response.data);
				CartCounter.saveItemNumber(response.data.count);
				setCartNumber(CartCounter.getItemNumber());
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
			<Navigation cartNumber={cartNumber} />
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
					<button className="btn btn-primary w-100" onClick={addItem}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
