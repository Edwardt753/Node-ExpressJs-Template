const { errorRes, generateErrorMessage } = require("./02_response");
const { studentform } = require("./01_validator");

const validatestudent = (req, res, next) => {
  try {
    const requestData = studentform.safeParse(req.body);

    if (!requestData.success) {
      // Zod validation failed, extract and send the error messages
      const errorMessage = generateErrorMessage(requestData.error.issues); // Use Zod's errors
      errorRes(res, errorMessage.code, errorMessage.message);
    } else {
      next(); // Validation passed, proceed
    }
  } catch (error) {
    console.error("Invalid data:", error);
    errorRes(res, 500, "Internal server error");
  }
};

module.exports = { validatestudent };
