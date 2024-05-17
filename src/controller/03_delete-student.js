const db = require("../model/index");
const studentmodels = db.student;

const DeleteStudents = async (req, res) => {
  const { id } = req.params;
  try {
    const deletestudents = await studentmodels.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "student deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: "errors",
    });
  }
};
module.exports = { DeleteStudents };
