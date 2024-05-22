const db = require("../model/index");
const studentmodel = db.student;

const EditStudentData = async (req, res) => {
  const { id } = req.params;
  const { fullname, gender, email } = req.body;
  try {
    const UpdateData = await studentmodel.update(
      {
        fullname: fullname,
        gender: gender,
        email: email,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(200).json({
      data: true,
      body: "success edit data",
    });
  } catch (error) {
    return res.json({
      data: false,
      error: error,
    });
  }
};

module.exports = { EditStudentData };
