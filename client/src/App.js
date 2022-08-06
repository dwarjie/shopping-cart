import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

// components
import Login from "./components/public/login";

// admin components
import Dashboard from "./components/admin/dashboard";
import UserList from "./components/admin/users_list";

function App() {
	return (
		<div>
			{/* define routes */}
			<Routes>
				<Route path="/" element={<Login />} />
				<Route exact path="/admin" element={<Dashboard />} />
				<Route exact path="/admin/users" element={<UserList />} />
			</Routes>
		</div>
	);
}

export default App;
