// this reusable component will be a navigation bar
// this will be imporated to all frontend components
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
					className="collapse navbar-collapse justify-content-lg-end"
					id="navbar-toggle-content"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<Link to={"/"} className="nav-item nav-link">
							Login
						</Link>
						<Link to={"/home"} className="nav-item nav-link">
							Home
						</Link>
						<Link to={"/products"} className="nav-item nav-link">
							Products
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
