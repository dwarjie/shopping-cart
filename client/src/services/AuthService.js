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

// get the token from the browser local storage
const getToken = () => {
	return JSON.parse(localStorage.getItem("token"));
};

const AuthService = {
	saveToken,
	getToken,
};

export default AuthService;