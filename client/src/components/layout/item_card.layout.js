import React from "react";

const ItemCard = (props) => {
	return (
		<div className="g-col-6">
			<div className="card">
				<div className="card-body">
					<h2 className="card-title">Logitech Mouse</h2>
					<h4 className="card-subtitle mb-2">&#8369; 5,000.00</h4>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
						voluptate ex, veniam reiciendis aperiam, sunt natus qui, tempora
						saepe dolorum labore expedita autem porro fugit omnis laborum
						corrupti unde. Pariatur.
					</p>
					<button className="d-block w-100 btn btn-primary mx-auto">
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
