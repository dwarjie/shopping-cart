import React, { useState } from "react";
import { PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

// components
import Navigation from "../layout/navigation.layout";
import UserService from "../../services/UserService";

const Login = () => {
	const initialCredentialState = {
		username: "",
		password: "",
	};
	const [user, setUser] = useState([]);
	const [credential, setCredetial] = useState(initialCredentialState);

	// call the user service to check if the user exist
	const verifyUser = (event) => {
		event.preventDefault();
		UserService.verifyUser(credential.username)
			.then((response) => {
				setUser(response.data);
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setCredetial({ ...credential, [name]: value });
	};
	return (
		<div>
			<Navigation />
			<div className="container-fluid d-flex align-content-center justify-content-center mt-3">
				<div className="col-12 col-lg-6">
					<PersonCircle className="d-block my-4 mx-auto w-25 h-auto" />
					<form className="d-block mx-auto col-10 col-lg-6">
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							name="username"
							id="username"
							className="form-control mb-3"
							value={credential.username}
							onChange={handleInputChange}
						/>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							name="password"
							id="password"
							className="form-control mb-3"
							value={credential.password}
							onChange={handleInputChange}
						/>
						<p className="text-center">
							New user? <Link to={"/register"}>Register Now!</Link>
						</p>
						<button
							className="d-block w-100 btn btn-primary mx-auto"
							onClick={verifyUser}
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
