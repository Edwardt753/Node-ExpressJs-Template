const express = require("express");
const route = express.Router();

const db = require("../model/index");
const studentmodels = db.student;

route.get("/login", async (req, res) => {
  const payload = await studentmodels.findAll();
  return res.status(200).json({
    message: true,
    data: "login page",
    result: payload,
  });
});

module.exports = route;
