// this module will handle the routes from the server using http-common
import http from "../http-common";
import AuthService from "./AuthService";

// this route is for reading all the products
const readProducts = () => {
	return http.get("/admin/products");
};

// this route is for updating all a products
const updateProduct = (id, data) => {
	return http.put(`/admin/products/${id}`, data);
};

// this route is for deleting a product
const deleteProduct = (id) => {
	return http.delete(`/admin/products/${id}`);
};

// this route is for checking a specific product
const getProduct = (id) => {
	return http.get(`/admin/products/${id}`);
};

// this router is for client side
const readAllProducts = () => {
	return http.get("/products", { headers: AuthService.getToken() });
};

const ProductService = {
	readProducts,
	updateProduct,
	deleteProduct,
	getProduct,
	readAllProducts,
};

export default ProductService;
