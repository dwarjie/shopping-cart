import React, { useEffect, useState } from "react";
import { PersonCircle } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

// components
import Navigation from "../layout/navigation.layout";
import UserService from "../../services/UserService";
import AuthService from "../../services/AuthService";
import CartCounter from "../../utils/cartCounter";

const Login = () => {
	let navigate = useNavigate();
	const initialCredentialState = {
		username: "",
		password: "",
	};
	const [cartNumber, setCartNumber] = useState(0); // set the cartNumber to 0
	const [user, setUser] = useState([]);
	const [credential, setCredetial] = useState(initialCredentialState);

	// once the UI is loaded, get the value of cartNumber in the local storage and set it to cartNumber
	useEffect(() => {
		setCartNumber(CartCounter.getItemNumber());
	}, [cartNumber]);

	// call the user service to check if the user exist
	// if the user exist, check if it has items in the shopping cart
	// if it does, save it in the localStorage
	// if not, create a new with default value of 0
	const verifyUser = (event) => {
		event.preventDefault();
		UserService.verifyUser(credential)
			.then((response) => {
				setUser(response.data);
				AuthService.saveToken(response.data.accessToken);
				AuthService.saveUserId(response.data.id);
				CartCounter.saveItemNumber(response.data.cartItem);
				navigate("/products");
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
			<Navigation cartNumber={cartNumber} />
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
							New user? <Link to={"/users/register"}>Register Now!</Link>
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
