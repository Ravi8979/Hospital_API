const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide patient name"],
    },
    reports: [
    {
        status: {
            type: String,
            required: true,
            enum: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine","Positve-Admit"],
        },
        date: {
            type: Date,
            required:true,
        }
    }
],
doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
}
});

const Patient = new mongoose.model("Patient", patientSchema);

module.exports = Patient;