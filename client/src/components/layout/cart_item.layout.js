// this reusable component will be used for displaying the items of user in their shopping cart
import React, { useState } from "react";
import ProductPicture from "../../assets/product.jpg";

const CartItem = (props) => {
	return (
		<div className="col-12 d-flex flex-row justify-content-between align-content-start">
			<div className="d-flex flex-row align-content-start col-8">
				<img src={ProductPicture} alt="Product" className="img-fluid col-5" />
				<div>
					<h3>
						<strong>{props.data.product.name}</strong>
					</h3>
					<h3>&#8369; 500.00</h3>
				</div>
			</div>
			<div className="col-4">
				<div className="d-flex flex-row align-content-start justify-content-center">
					<span>-</span>
					<input
						type="text"
						name="quantity"
						id="quantity"
						className="border-0"
						readOnly={true}
						value={props.data.quantity}
					/>
					<span>+</span>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
