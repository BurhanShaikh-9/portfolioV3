const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const blogRoutes = require("./src/routes/blogs");
const userRoutes = require("./src/routes/user");
const dbConnection = require("./src/controller/databaseManager");

const app = express();
const port = process.env.PORT || 5000;

// Database connection
dbConnection();

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// Routes
app.use("/api", blogRoutes); 
app.use("/api", userRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
