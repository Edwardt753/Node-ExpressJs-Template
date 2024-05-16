//this is for add content image validator
const { errorRes, generateErrorMessage } = require("./02_response");
const { studentform } = require("./01_validator");

// Middleware function to validate user data
const validatestudent = (req, res, next) => {
  try {
    const { fullname, email, gender, grade } = req.body;

    const requestData = studentform.safeParse(req.body);
    // Check if any of the required fields is null
    if (fullname && email && gender && grade) {
      next(); // Move to the next middleware or route handler
    } else {
      const missingFields = requestData.error.issues.map((issue) =>
        issue.path.join(".")
      );
      const errorMessage = generateErrorMessage(missingFields); // Generate error message
      errorRes(res, errorMessage.code, errorMessage.message); // Send an error response
    }
  } catch (error) {
    console.error("Invalid data:", error);
    errorRes(res, 500, "Internal server error"); // Send an error response for internal server error
  }
};

module.exports = { validatestudent };
