const statusCode = 402;

const generateErrorMessage = (issues) => {
  const errorMessages = new Map();

  issues.forEach((issue) => {
    const field = issue.path.join(".");
    if (issue.code === "invalid_type" && issue.message.includes("Required")) {
      errorMessages.set(field, `${field} is required`);
    } else {
      errorMessages.set(field, issue.message);
    }
  });

  const errorMessage = Array.from(errorMessages.values()).join(", ");
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
