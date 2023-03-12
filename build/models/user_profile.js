"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        require: true,
        default: Date.now()
    }
});
module.exports = mongoose.model('User', UserSchema);
