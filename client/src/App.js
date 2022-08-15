import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";

// components
import Login from "./components/public/login";
import UserProduct from "./components/public/products";

// admin components
import Dashboard from "./components/admin/dashboard";
import UserList from "./components/admin/users_list";
import User from "./components/admin/user";
import AdminProductList from "./components/admin/product_list";
import AdminProduct from "./components/admin/product";

function App() {
	return (
		<div>
			{/* define routes */}
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/users/login" element={<Login />} />
				<Route path="/products" element={<UserProduct />} />
				<Route exact path="/admin" element={<Dashboard />} />
				<Route exact path="/admin/users" element={<UserList />} />
				<Route exact path="/admin/users/:id" element={<User />} />
				<Route exact path="/admin/products" element={<AdminProductList />} />
				<Route exact path="/admin/products/:id" element={<AdminProduct />} />
			</Routes>
		</div>
	);
}

export default App;
