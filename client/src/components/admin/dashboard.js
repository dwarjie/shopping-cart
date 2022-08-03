import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from "react";

function Dashboard() {
	return (
		<div className="container text-center mt-5">
			<h1>Admin Dashboard</h1>
			<div className="row gy-3 mt-3">
				<div className="col-sm-12 col-md-6 col-lg-4">
					<Link to={"/admin/users"}>
						<button
							type="button"
							className="p-4 w-100 btn btn-outline-primary btn-lg"
						>
							Users
						</button>
					</Link>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-4">
					<Link to={"/admin/products"}>
						<button
							type="button"
							className="p-4 w-100 btn btn-outline-primary btn-lg"
						>
							Products
						</button>
					</Link>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-4">
					<Link to={"/admin/inventory"}>
						<button
							type="button"
							className="p-4 w-100 btn btn-outline-primary btn-lg"
						>
							Inventory
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
