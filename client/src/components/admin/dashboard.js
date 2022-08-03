import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from "react";

function Dashboard() {
	return (
		<div className="container text-center mt-5">
			<h1>Admin Dashboard</h1>
			<div className="row gy-3 mt-3">
				<Link to={"/admin/users"}>
					<div className="col-sm-12 col-md-6 col-lg-4">
						<button
							type="button"
							className="btn btn-outline-primary btn-lg p-4 w-100"
						>
							Users
						</button>
					</div>
				</Link>
				<Link to={"/admin/products"}>
					<div className="col-sm-12 col-md-6 col-lg-4">
						<button
							type="button"
							className="btn btn-outline-primary btn-lg p-4 w-100"
						>
							Products
						</button>
					</div>
				</Link>
				<Link to={"/admin/inventory"}>
					<div className="col-sm-12 col-md-6 col-lg-4">
						<button
							type="button"
							className="btn btn-outline-primary btn-lg p-4 w-100"
						>
							Inventory
						</button>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Dashboard;
