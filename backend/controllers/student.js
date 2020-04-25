const Student = require("../models/student");
const shortId = require("shortid");

/**
 * @function getStudents
 * @param {object} res
 * @returns {void}
 */
const getStudents = async (req, res) => {
  const students = await Student.find().select(`
    _id 
    fname 
    lname 
    email 
    phone
    street1
    street2
    city
    state
    zip
    gpa
    studentId
    createdAt 
    updatedAt
  `);
  res.json(students);
};

const getStudent = (req, res) => {
  Student.findById(req.params.id, function (err, student) {
    if (err) return next(err);
    res.send(student);
  });
};

const enrollStudent = (req, res) => {
  Student.findOne({ email: req.body.email }).exec((err, student) => {
    if (student) {
      return res.status(400).json({
        error: "Email is already used",
      });
    }

    const {
      fname,
      lname,
      email,
      gpa,
      phone,
      street1,
      street2,
      city,
      state,
      zip,
    } = req.body;

    let studentId = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${studentId}`;

    let newStudent = new Student({
      fname,
      lname,
      email,
      gpa,
      phone,
      profile,
      studentId,
      street1,
      street2,
      city,
      state,
      zip,
    });
    newStudent.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json({
        student: success,
      });
    });
  });
};

const updateStudent = (req, res) => {
  // Validate Request
  if (!req.body.email) {
    return res.status(400).send({
      message: "This student is not enrolled",
    });
  }
  Student.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  )
    .then((student) => {
      if (!student) {
        return res.status(404).send({
          message: "Student not found with Student ID " + req.params.studentId,
        });
      }
      res.send(student);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Student not found with Student ID " + req.params.studentId,
        });
      }
      return res.status(500).send({
        message: "Error updating note with Student ID " + req.params.studentId,
      });
    });
};

const deleteStudent = (req, res) => {
  Student.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};

module.exports = {
  getStudents,
  enrollStudent,
  updateStudent,
  getStudent,
  deleteStudent,
};
