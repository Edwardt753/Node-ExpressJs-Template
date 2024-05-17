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
    // Transform the status field
    const transformedPayload = {
      ...payload.toJSON(),
      status: payload.status ? 0 : 1,
    };
    return res.status(200).json({
      message: true,
      data: transformedPayload,
    });
  }
  payload = await studentmodels.findAll({ paranoid: false }); //paranoid:true(defaultnya true), jadi yang deletedAt exist gak show
  //if paranoid:false, munculin semua regardless deletedAt
  // Transform the status field for each record
  const transformedPayload = payload.map((student) => {
    return {
      ...student.toJSON(),
      status: student.status ? 0 : 1,
    };
  });
  return res.status(200).json({
    message: true,
    data: "login page",
    result: transformedPayload,
  });
};

module.exports = { ListStudents };
