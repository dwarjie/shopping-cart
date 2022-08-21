import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// components
import Navigation from "../layout/navigation.layout";
import UserService from "../../services/UserService";

const Register = () => {
	const navigate = useNavigate();
	const initialUserState = {
		firstName: "",
		lastName: "",
		email: "",
		userName: "",
		password: "",
	};
	const [user, setUser] = useState(initialUserState);

	const registerUser = (event) => {
		event.preventDefault();
		UserService.registerUser(user)
			.then((response) => {
				if (!response.data.id) {
					console.log("Error registering user");
				}

				navigate("/products");
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// this will handle the input changes
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

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
						value={user.firstName}
						onChange={handleInputChange}
					/>
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						name="lastName"
						placeholder="Enter your last name"
						id="lastName"
						className="form-control mb-3"
						value={user.lastName}
						onChange={handleInputChange}
					/>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						id="email"
						className="form-control mb-3"
						value={user.email}
						onChange={handleInputChange}
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
								value={user.userName}
								onChange={handleInputChange}
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
								value={user.password}
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<p className="text-center">
						Already have an account? <Link to={"/users/login"}>Login Now!</Link>
					</p>
					<button
						type="submit"
						className="d-block w-100 btn btn-primary mx-auto"
						onClick={registerUser}
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
