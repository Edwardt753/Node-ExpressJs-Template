const express = require("express");
const route = express.Router();

route.get("/login", (req, res) => {
  return res.status(200).json({
    message: true,
    data: "login page",
  });
});

module.exports = route;
