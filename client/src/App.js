import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import React from "react";

// components
import Home from "./components/public/home";
import Login from "./components/public/login";
import Register from "./components/public/register";
import UserProduct from "./components/public/products";
import Item from "./components/public/product_item";
import Cart from "./components/public/cart";

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
				<Route path="/" element={<Home />} />
				<Route path="/users/login" element={<Login />} />
				<Route path="/users/register" element={<Register />} />
				<Route path="/products" element={<UserProduct />} />
				<Route path="/cart" element={<Cart />} />
				<Route exact path="/products/:id" element={<Item />} />
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
