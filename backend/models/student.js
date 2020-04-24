const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true,
    },
    fname: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    lname: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    street1: {
      type: String,
    },
    street2: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: Number,
    },
    phone: {
      type: String,
    },
    profile: {
      type: String,
      required: true,
    },
    gpa: {
      type: mongoose.Decimal128,
      default: 0,
    },
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
