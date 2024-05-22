const db = require("../model/index");
const studentmodels = db.student;

const AddStudents = async (req, res) => {
  const { fullname, email, gender } = req.body;

  try {
    //Check email first
    const checkEmail = await studentmodels.findOne({
      where: {
        email: email,
      },
    });

    //email conditioning
    if (checkEmail) {
      return res.status(500).json({
        data: false,
        message: "invalid student data to input",
      });
    }

    //Insert Data
    const InputData = await studentmodels.create({
      fullname: fullname,
      email: email,
      gender: gender,
    });

    return res.status(201).json({
      success: true,
      message: "success create student",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { AddStudents };
