import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// component
import Navigation from "../layout/navigation.layout";
import CartCounter from "../../utils/cartCounter";

const Home = () => {
	const [cartNumber, setCartNumber] = useState(0); // set the cartNumber to 0

	// once the UI is loaded, get the value of cartNumber in the local storage and set it to cartNumber
	useEffect(() => {
		setCartNumber(CartCounter.getItemNumber());
	}, [cartNumber]);

	return (
		<div>
			<Navigation cartNumber={cartNumber} />
			<div className="landing">
				<div className="overlay d-flex flex-column align-content-center justify-content-center text-center">
					<h1 className="display-1">
						<strong>Online shopping with cart shop!</strong>
					</h1>
					<h3 className="display-3">Shop till you drop</h3>
					<Link
						to={`/products`}
						className="btn btn-outline-light d-block mx-auto w-20 mt-3"
					>
						Shop now!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
