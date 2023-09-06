const express = require("express");
const passport = require("passport");
const usercontroller = require("../controllers/usercontroller");
const { registerPatient,registerDoctor,createReport,login,all_reports,AllReports} = require('../controllers/usercontroller');


const router = express.Router();

router.post("/doctors/register",registerDoctor);

router.post("./login", login);

router.post("/patient/register",passport.authenticate('jwt',{session: false}), registerPatient);

router.post("/patient/:id/create_report",passport.authenticate("jwt", {session: false}), createReport);

router.get("/patient/:id/all_report", all_reports);

router.get("/reports/:status", AllReports);

module.exports = router;
