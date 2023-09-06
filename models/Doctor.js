const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "please Enter Your name"],
    },
    password: {
        type: String,
        required: [true,"please Enter Your Password"],
        minLength: [6, "password should be greater than 6 characters"],
    },
});

const Doctor = new mongoose.model("Doctor",doctorSchema);

module.exports = Doctor;