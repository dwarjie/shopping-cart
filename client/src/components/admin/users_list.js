import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";

// components
import UserService from "../../services/UserService";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(-1);

	// once the UI are done rendering
	// use effect function will call readALlUsers
	useEffect(() => {
		readAllUsers();
	}, []);

	// this function will request to the server using the routes in UserService
	// then retrieve all the users from the database
	const readAllUsers = () => {
		UserService.readUser()
			.then((response) => {
				setUsers(response.data);
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container text-center mt-5">
			<h1>Users List</h1>
			<div>
				<ul className="list-group">
					{users &&
						users.map((user) => (
							<div
								className="list-group-item d-flex flex-row align-items-center justify-content-between"
								key={user.id}
							>
								<p className="m-0">{`${user.firstName} ${user.lastName}`}</p>
								<div
									className="btn-group"
									role="group"
									aria-label="Basic example"
								>
									<button type="button" className="btn btn-primary">
										<PencilSquare />
									</button>
									<button type="button" className="btn btn-danger">
										<TrashFill />
									</button>
								</div>
							</div>
						))}
				</ul>
			</div>
		</div>
	);
};

export default UserList;
