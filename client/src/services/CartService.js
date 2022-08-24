// this module will handle shopping cart services
import http from "../http-common";

// read all the items in the shopping cart using the userId
const getUserItem = (id) => {
	return http.get(`/cart/${id}`);
};

// add new item in cart
const addItem = (data) => {
	return http.post(`/cart`, data);
};

// update the item in the shopping cart
const updateItem = (id, data) => {
	return http.put(`/cart/${id}`, data);
};

// delete the item from cart
const deleteItem = (id) => {
	return http.delete(`/cart/${id}`);
};

const CartSevice = {
	getUserItem,
	addItem,
	deleteItem,
	updateItem,
};

export default CartSevice;
