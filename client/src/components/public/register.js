import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components
import Navigation from "../layout/navigation.layout";

const Register = () => {
	return (
		<div>
			<Navigation />
			<div className="container-fluid d-flex flex-column align-content-center justify-content-center mt-3">
				<h1 className="text-center">Register</h1>
				<form className="d-flex flex-column mx-auto col-10 col-lg-6">
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						name="firstName"
						placeholder="Enter your first name"
						id="firstName"
						className="form-control mb-3"
					/>
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						name="lastName"
						placeholder="Enter your last name"
						id="lastName"
						className="form-control mb-3"
					/>
					<div className="d-flex flex-row gap-2">
						<div className="flex-fill">
							<label htmlFor="userName">Username:</label>
							<input
								type="text"
								name="userName"
								placeholder="Username"
								id="userName"
								className="form-control mb-3 flex-fill"
							/>
						</div>
						<div className="flex-fill">
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								name="password"
								placeholder="atleast 4 - 8 characters"
								id="password"
								className="form-control mb-3 flex-fill"
							/>
						</div>
					</div>
					<p className="text-center">
						Already have an account?{" "}
						<Link to={"/users/register"}>Login Now!</Link>
					</p>
					<button className="d-block w-100 btn btn-primary mx-auto">
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
