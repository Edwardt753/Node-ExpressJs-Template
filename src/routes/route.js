const express = require("express");
const route = express.Router();
const { ListStudents } = require("../controller/01_List-students");
const { AddStudents } = require("../controller/02_Add-students");
const { validatestudent } = require("../validator/03_student-validator");
const { DeleteStudents } = require("../controller/03_delete-student");
const { EditStudentData } = require("../controller/04_Edit-student");
const { RestoreStudents } = require("../controller/05-Restore-student");

//Parameter endpoints
route.get("/student/:id?", ListStudents);

route.post("/student/add", validatestudent, AddStudents);
route.put("/student/edit/:id", EditStudentData);

route.delete("/student/delete/:id", DeleteStudents);
route.post("/student/restore/:id", RestoreStudents);
//export routing
module.exports = route;
