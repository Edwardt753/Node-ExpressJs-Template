const express = require("express");
const route = express.Router();
const { ListStudents } = require("../controller/01_List-students");
const { AddStudents } = require("../controller/02_Add-students");
const { validatestudent } = require("../validator/03_student-validator");
const { DeleteStudents } = require("../controller/03_delete-student");

//Parameter endpoints
route.get("/student/:id?", ListStudents);

route.post("/student/add", validatestudent, AddStudents);

route.delete("/student/delete/:id", DeleteStudents);
//export routing
module.exports = route;
