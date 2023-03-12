const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema);