require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors"); //CORS SETTINGS
const morgan = require("morgan"); //Logger

const PORT = process.env.PORT || 8080;
const app = express();
const { route } = require("./routes/route");
app.use(express.json()); // Middleware (for parsing JSON data)

app.use(morgan("dev")); //Logging settings

// Cors Setting
if (process.env.NODE_ENV !== "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
} else {
  app.use(cors());
}

// Default Welcome Message
app.get("/", (req, res) => {
  res.send(
    `Welcome to ${"DDTC"} Service. <br> Version : ${process.env.VERSION}`
  );
});

app.use("/", route); //Routing

// Error catcher
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ status: 401, message: "invalid token" });
  } else {
    next(err);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
