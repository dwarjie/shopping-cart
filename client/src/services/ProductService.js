// this module will handle the routes from the server using http-common
import http from "../http-common";

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

const ProductService = {
	readProducts,
	updateProduct,
	deleteProduct,
	getProduct,
};

export default ProductService;
