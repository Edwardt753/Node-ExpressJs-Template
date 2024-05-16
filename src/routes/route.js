const express = require("express");
const route = express.Router();
const { ListStudents } = require("../controller/01_students");

route.get("/student/:id?", ListStudents);

module.exports = route;
