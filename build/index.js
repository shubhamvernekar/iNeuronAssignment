"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const userProfileRoutes = require("./routes/user_profile");
require("./handler/connect_db");
app.use(express.json());
app.use('/profile', userProfileRoutes);
app.listen(8080, () => {
    console.log(`server running `);
});
