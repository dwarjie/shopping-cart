// this module will handle the sending of error message
// once the server found an exception in the catch function

module.exports = Error_Message = (res, code, message) => {
	res.status(code).send({
		message: message,
	});
};
