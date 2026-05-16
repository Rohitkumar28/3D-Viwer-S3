const express = require("express")
const cors = require("cors");

const authRoutes = require("./routes/authRoutes")
const modelRoutes = require("./routes/modelRoutes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/models", modelRoutes);

module.exports = app