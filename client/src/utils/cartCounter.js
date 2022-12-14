// this utility will save the shopping cart items of the user once logged in
// it will be saved to the local storage
const saveItemNumber = (itemNumber) => {
	// check if itemNumber exists
	if (itemNumber === null) {
		return console.log("Error saving cart item number");
	}

	localStorage.setItem("cartItemNumber", JSON.stringify(itemNumber));
};

const getItemNumber = () => {
	if (localStorage.key("cartItemNumber") === null) {
		return 0;
	}

	const itemNumber = JSON.parse(localStorage.getItem("cartItemNumber"));

	// check if itemNumber exists
	if (!itemNumber) {
		return 0;
	}

	return itemNumber;
};

const CartCounter = {
	saveItemNumber,
	getItemNumber,
};

export default CartCounter;
