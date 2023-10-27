const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookeAppointmentController,
  bookingAvailabilityController,
  userAppointmentController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router inject
const router = express.Router();

//routes
//login || post

router.post("/login", loginController);

//register
router.post("/register", registerController);

//Authrization bil post
router.post("/getUserData", authMiddleware, authController);
//Apply doctor bil post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//notification ly tebib || post
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//notification ly tebib || post
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);
//get all doc
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

// booking appointment
router.post("/book-appointment", authMiddleware, bookeAppointmentController);

// booking avalability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Appointmentss Lissssth
router.get("/user-appointments", authMiddleware, userAppointmentController);

module.exports = router;
