// This module will handle the routes from the server using https-common
import http from "http-common";

// this route is for reading all the users from server
const readUser = () => {
	return http.get("/admin/users");
};
// this route is for updating a new users from server
const updateUser = (id, data) => {
	return http.put(`/admin/users/${id}`, data);
};
// this route is for deleting a user from server
const deleteUser = (id) => {
	return http.delete(`/admin/users/${id}`);
};

const UserService = {
	readUser,
	updateUser,
	deleteUser,
};

export default UserService;
