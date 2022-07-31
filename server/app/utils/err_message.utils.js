// this module will handle the sending of error message
// once the server found an exception in the catch function

const Error_Message = (res, code, message) => {
	res.status(code).send({
		message: message,
	});
};

module.export = Error_Message;
