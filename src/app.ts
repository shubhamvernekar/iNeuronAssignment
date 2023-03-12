const express = require("express");
const userProfileRoutes = require("./routes/user_profile");
require("./handler/connect_db");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json")

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/profile', userProfileRoutes);

module.exports = app;