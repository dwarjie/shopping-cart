// this reusable component will be a navigation bar
// this will be imporated to all frontend components
import React from "react";
import { Link } from "react-router-dom";
import { BagFill } from "react-bootstrap-icons";

const Navigation = () => {
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
						<Link to={"users/login"} className="nav-item nav-link">
							Login
						</Link>
						<Link to={"/products"} className="nav-item nav-link">
							Products
						</Link>
					</ul>
				</div>
				<BagFill
					type="button"
					className="text-light mx-4 position-relative"
					width="20"
					height="20"
				/>
			</div>
		</nav>
	);
};

export default Navigation;
