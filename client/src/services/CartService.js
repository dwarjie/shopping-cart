// this module will handle shopping cart services
import http from "../http-common";

// add new item in cart
const addItem = (data) => {
	return http.post(`/cart`, data);
};

const CartSevice = {
	addItem,
};

export default CartSevice;
