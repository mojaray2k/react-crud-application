const express = require("express");
const router = express.Router();

// student controllers

const {
  getStudents,
  getStudent,
  enrollStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");

router.get("/students", getStudents);
router.get("/students/:id", getStudent);
router.post("/students", enrollStudent);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

module.exports = router;
