const express = require("express");
const router = express.Router();

// student controllers

const {
  getStudents,
  enroll,
  updateStudent,
} = require("../controllers/student");

router.get("/students", getStudents);
router.post("/students", enroll);
router.put("/students/:studentId", updateStudent);

module.exports = router;
