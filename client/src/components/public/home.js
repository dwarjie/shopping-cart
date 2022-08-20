import React from "react";
import { Link } from "react-router-dom";

// component
import Navigation from "../layout/navigation.layout";

const Home = () => {
	return (
		<div>
			<Navigation />
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
