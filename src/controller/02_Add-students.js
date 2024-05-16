const db = require("../model/index");
const studentmodels = db.student;

const AddStudents = async (req, res) => {
  const { fullname, email, gender, grade } = req.body;
  try {
    const InputData = await studentmodels.create({
      fullname: fullname,
      email: email,
      gender: gender,
      grade: grade,
    });

    return res.status(201).json({
      success: true,
      message: "success create student",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { AddStudents };
