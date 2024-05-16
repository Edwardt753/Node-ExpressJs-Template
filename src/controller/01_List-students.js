const db = require("../model/index");
const studentmodels = db.student;

const ListStudents = async (req, res) => {
  const { id } = req.params;
  let payload;
  if (id) {
    payload = await studentmodels.findByPk(id);
    if (!payload) {
      return res.status(404).json({
        message: "data not found",
        data: false,
      });
    }
    return res.status(200).json({
      message: true,
      data: payload,
    });
  }
  payload = await studentmodels.findAll();
  return res.status(200).json({
    message: true,
    data: "login page",
    result: payload,
  });
};

module.exports = { ListStudents };
