import React from "react";
import ProductPicture from "../../assets/product.jpg";

const ItemCard = (props) => {
	return (
		<div className="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
			<div className="card">
				<img src={ProductPicture} alt="Product" className="card-img-top" />
				<div className="card-body">
					<h2 className="card-title">{props.data.name}</h2>
					<h4 className="card-subtitle mb-2">&#8369; {props.data.price}</h4>
					<p className="card-text">{props.data.desc}</p>
					<button className="d-block w-100 btn btn-primary mx-auto">
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
