// this reusable component will be a navigation bar
// this will be imporated to all frontend components
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BagFill } from "react-bootstrap-icons";

const Navigation = () => {
	let navigate = useNavigate();

	const goToCart = () => {
		navigate("/cart");
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark w-auto">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar-toggle-content"
					aria-controls="navbar-toggle-content"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse float-lg-end"
					id="navbar-toggle-content"
				>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4">
						<Link to={"/"} className="nav-item nav-link">
							Home
						</Link>
						<Link to={"/users/login"} className="nav-item nav-link">
							Login
						</Link>
						<Link to={"/products"} className="nav-item nav-link">
							Products
						</Link>
					</ul>
				</div>
				<div className="w-0 position-relative mx-4">
					<BagFill
						type="button"
						className="text-light"
						width="25"
						height="25"
						onClick={goToCart}
					/>
					<span className="position-absolute top-0 start-80 translate-middle badge rounded-pill text-bg-danger text-light">
						0
					</span>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
