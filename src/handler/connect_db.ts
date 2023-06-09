require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {useNewUrlParser:true});

const db = mongoose.connection;

db.on("open", () => console.log("DB: Connected"));
db.on('error', (err: any) => console.error("DB: fail connecting error = " + err));
