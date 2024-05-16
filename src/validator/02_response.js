const statusCode = 402;

const generateErrorMessage = (missingFields) => {
  const errorMessage = `${missingFields.join(", ")} is required`;
  return {
    code: statusCode,
    success: false,
    message: errorMessage,
  };
};

const errorRes = (res, statusCode, message) => {
  res.status(statusCode).json({
    code: statusCode,
    success: false,
    message: message,
  });
};

module.exports = { generateErrorMessage, errorRes };
