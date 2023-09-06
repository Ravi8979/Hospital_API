const Doctor = require('../models/doctor');
const Patient = require('../models/Patient');
const jwt = require('jsonwebtoken');

module.exports.registerDoctor = async(req, res, next) => {
    try {
        const doctor = await Doctor.create(req.body);

        res.status(200).json({
            success: true,
            message: "doctor created successfully",

        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "could not create a docotr, internal server error"
    });
    }
};

module.exports.login = async(req, res, next) => {
    try {
    const user = Doctor.find(req_body);

    if (user) {
        const token = jwt.sign(user.id,"secret");
        res.status(200).json ({
            success: true,
            token,
        });
    } else  {
        res.status(404).json({
            success:  false,
            message: "name or password do not match",
        });
    }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
        });
    }
};

    module.exports.registerPatient = async (req, res, next) => {
        try {
            req.body.doctor = "64f84de04ac009c659cf7f4c";
            const patient = await Patient.create(req.body);

            res.status(200).json({
                success: true,
                message: "succesfully created a patient",
            });
        } catch (error) {
res.status(500).json ({
    success: false,
    message: "cold not create a patient, internal server error",
});
        }
    };
     module.exports.createReport = async (req, res, next) =>{

     try {
        const patient = await Patient.findById(req.params.id);

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient not found",
            });
        }

        req.body.date = Date.now();

        patient.reports.push(req.body);

        await patient.save();

        res.status(200).json ({
            success: true,
            message: "report submitted succesfully",
        });

     } catch (error) {
        console.log("createreport", error)
        res.status(500).json ({
            success: false,
            message: " could not created a report, internal server error "
        });
    }
};    

module.exports.all_reports = async (req, res, next) => {
    try {
        const report = await Patient.findById(req.params.id);

        res.status(200).json ({
            success: true,
            reports: Patient.reports,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "could not able to fetch the patient reports",
        });
    }
};

module.exports.AllReports = async (req, res, next)=> {
    try {
    const patient = await Patient.find({
        reports: { salesMatch: { status: req.params.status }},
    });
    res.status(200).json({
        success: true,
        data: patient,
    });
} catch (error) {
    res.status(500).json ({
        success: false,
        message: "could not able to fatch the reports",
    })
}
};
