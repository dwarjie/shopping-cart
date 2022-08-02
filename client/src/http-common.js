import axios from "axios";

// This module will handle the REST API baseURL for the Server configuration
export default axios.create({
	baseURL: "http://localhost:8080/api/",
	headers: {
		"Content-Type": "application/json",
	},
});
