// this module will be private
// this will contain the global information about the user who is logged in
// since there are no authentication or tokens used in this project
// the information of the user logged in will be saved here

// private methods
const Global = (function () {
	let isLoggedIn = false;
	let userLoggedIn = {};

	const setLoggedIn = (loggedIn) => {
		isLoggedIn = loggedIn;
	};

	const setUser = (user) => {
		if (!isLoggedIn) return;

		userLoggedIn = user;
	};

	const getLoggedIn = () => {
		return isLoggedIn;
	};

	const getUserID = () => {
		return userLoggedIn.id;
	};

	const getUserName = () => {
		return userLoggedIn.userName;
	};

	const getUserFullName = () => {
		return userLoggedIn.firstName + " " + userLoggedIn.lastName;
	};

	return {
		setLoggedIn,
		setUser,
		getLoggedIn,
		getUserID,
		getUserName,
		getUserFullName,
	};
})();

export default Global;
