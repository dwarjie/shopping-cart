import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// components
import UserService from "../../services/UserService";

const User = () => {
	const { id } = useParams();
	let navigate = useNavigate();

	// initial state for users information
	const initialUserState = {
		id: null,
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		password: "",
	};

	const [currentUser, setCurrentUser] = useState(initialUserState);
	const [message, setMessage] = useState("");

	// once the UI is loaded, this function will call the getUser method
	useEffect(() => {
		// if id exist, run this function
		if (id) {
			getUser(id);
		}
	}, [id]);

	// get the user information
	// in order to display it to the UI
	const getUser = (id) => {
		UserService.getUser(id)
			.then((response) => {
				setCurrentUser(response.data);
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// update the users information
	const updateUser = (event) => {
		event.preventDefault();

		UserService.updateUser(currentUser.id, currentUser)
			.then((response) => {
				console.log(response.data);
				setMessage("User updated");
				getUser(id);
			})
			.catch((err) => {
				console.log(err);
				setMessage("Could not update user");
			});
	};

	// cancel the update and go back from the users list
	const cancelUpdate = () => {
		navigate("/admin/users");
	};

	// this will handle the onChange of inputs
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setCurrentUser({ ...currentUser, [name]: value });
	};

	return (
		<div className="container mt-4">
			<h1 className="text-center mb-3">Edit User</h1>
			<form>
				<div className="form-group mb-3">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						className="form-control"
						id="firstName"
						name="firstName"
						value={currentUser.firstName}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						className="form-control"
						id="lastName"
						name="lastName"
						value={currentUser.lastName}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="userName">User Name</label>
					<input
						type="text"
						className="form-control"
						id="userName"
						name="userName"
						value={currentUser.userName}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={currentUser.email}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="password">Password</label>
					<input
						type="text"
						className="form-control"
						id="password"
						name="password"
						value={currentUser.password}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="form-group d-grid d-md-block gap-2 mb-3">
					<button
						type="submit"
						className="mx-md-2 btn btn-primary"
						onClick={updateUser}
					>
						Update
					</button>
					<button className="btn btn-secondary" onClick={cancelUpdate}>
						Cancel
					</button>
					<p className="my-2">{message}</p>
				</div>
			</form>
		</div>
	);
};

export default User;
