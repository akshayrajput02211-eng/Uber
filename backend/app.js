require("dotenv").config();

const express = require("express");

const cors = require("cors");

const cookieParser = require("cookie-parser");

const connectDB = require("./db/db");

const userRoutes = require("./routes/user.routes");

const captainRoutes = require("./routes/captain.routes");

const rideRoutes = require("./routes/ride.routes");

const app = express();

connectDB();

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.use("/api/captains", captainRoutes);

app.use("/api/rides", rideRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

module.exports = app;