const { where } = require("sequelize");
const db = require("../model/index");
const studentmodels = db.student;

const RestoreStudents = async (req, res) => {
  const { id } = req.params;

  try {
    await studentmodels.restore({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: true,
      message: "student restored",
    });
  } catch (error) {
    return res.status(500).json({
      data: false,
      message: error,
    });
  }
};

module.exports = { RestoreStudents };
