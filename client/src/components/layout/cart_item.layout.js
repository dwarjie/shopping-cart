// this reusable component will be used for displaying the items of user in their shopping cart
import React, { useState } from "react";
import { TrashFill } from "react-bootstrap-icons";

// components
import ProductPicture from "../../assets/product.jpg";

const CartItem = (props) => {
	const [quantity, setQuantity] = useState(props.data.quantity);

	// delete the item from the cart by calling the props deleteItem method
	const deleteItem = (id) => {
		props.deleteItem(id);
	};

	// update the data of the item, this will be called in the increase and decrease of the quantity
	const updateItem = (newQuantity) => {
		props.updateItem(props.data.id, newQuantity);
	};

	// increase the quantity
	const increaseQuantity = () => {
		const newQuantity = quantity + 1;
		updateItem(newQuantity);
		setQuantity(newQuantity);
	};

	// decrease quantity
	const decreaseQuantity = () => {
		// check if quantity is 1, then don't allow decrease
		if (quantity !== 1) {
			const newQuantity = quantity - 1;
			updateItem(newQuantity);
			setQuantity(newQuantity);
		}
	};

	// update the quantity of the item
	return (
		<div className="col-12 d-flex flex-row justify-content-between align-content-start p-2">
			<div className="d-flex flex-row align-content-start col-10 gap-4">
				<img
					src={ProductPicture}
					alt="Product"
					className="img-fluid col-6 col-md-5 col-lg-3"
				/>
				<div>
					<h3 className="fs-6">
						<strong>{props.data.product.name}</strong>
					</h3>
					<h3 className="fs-6">&#8369; 500.00</h3>
				</div>
			</div>
			<div className="col d-flex flex-column justify-content-between align-content-end">
				<TrashFill
					className="text-danger fs-6 c-pointer d-block mx-auto"
					onClick={() => deleteItem(props.data.id)}
				/>
				<div className="d-flex flex-row align-content-start justify-content-center">
					<span className="mx-4 c-pointer" onClick={decreaseQuantity}>
						-
					</span>
					<p>{quantity}</p>
					<span className="mx-4 c-pointer" onClick={increaseQuantity}>
						+
					</span>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
