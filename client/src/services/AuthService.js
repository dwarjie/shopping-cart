// this module will handle the authorization token
// it will save the token in the Browser local storage
// and will also get the token when needed

const saveToken = (token) => {
	// check if token exists
	if (token === null) {
		return console.log("Error in saving token.");
	}

	// save token
	localStorage.setItem("token", JSON.stringify(token));
};

// save user id
const saveUserId = (userId) => {
	// check if userid exists
	if (userId === null) {
		return console.log("Error in saving user id.");
	}

	localStorage.setItem("userId", JSON.stringify(userId));
};

// get the token from the browser local storage
const getToken = () => {
	const token = JSON.parse(localStorage.getItem("token"));
	if (token) {
		return { "x-access-token": token };
	} else {
		return {};
	}
};

const getUserId = () => {
	const id = JSON.parse(localStorage.getItem("userId"));
	if (!id) {
		return;
	}

	return id;
};

const AuthService = {
	saveToken,
	saveUserId,
	getToken,
	getUserId,
};

export default AuthService;
