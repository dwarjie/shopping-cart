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

const CartSevice = {
	getUserItem,
	addItem,
};

export default CartSevice;
