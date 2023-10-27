const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentController,
  updateStatusController,
} = require("../controllers/doctorCtrl");

const router = express.Router();

// post doc

router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//post for update the profile
router.post("/updateProfile", authMiddleware, updateProfileController);

// post to get one singeel doctor info
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

// get appointments
router.get("/doctor-appointment", authMiddleware, doctorAppointmentController);

// post for updating status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
