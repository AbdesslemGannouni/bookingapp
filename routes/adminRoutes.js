const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  gettAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");

const router = express.Router();

//get method || USERSSSSS
router.get("/getAllUsers", authMiddleware, gettAllUsersController);

//get methodd || DOCTORSSS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//post account statues
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
