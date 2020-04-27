import {
  GET_STUDENTS,
  GET_STUDENTS_ERROR,
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from "./actionTypes";

import { getStudents, addStudent } from "../api";

export const getStudentList = (data) => ({
  type: GET_STUDENTS,
  payload: data,
});

export const getStudentListError = (error) => ({
  type: GET_STUDENTS_ERROR,
  error,
});

export const addNewStudent = (data) => ({
  type: ADD_STUDENT,
  payload: data,
});

export const addNewStudentError = (data) => ({
  type: ADD_STUDENT,
  payload: data,
});

export const updateStudentProfile = (data) => ({
  type: UPDATE_STUDENT,
  payload: data,
});

export const deleteStudentProfile = (id) => ({
  type: DELETE_STUDENT,
  payload: id,
});

export const getAllStudents = () => async (dispatch) => {
  try {
    const data = await getStudents();
    const studentInformation = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      phone: data.phone,
      street1: data.street1,
      street2: data.street2,
      city: data.city,
      state: data.state,
      zip: data.zip,
      gpa: data.gpa,
    };
    dispatch(getStudentList(studentInformation));
  } catch (error) {
    dispatch(getStudentListError(error));
  }
};

export const postNewStudent = (student) => async (dispatch) => {
  try {
    const data = await addStudent(student);
    const studentInformation = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      phone: data.phone,
      street1: data.street1,
      street2: data.street2,
      city: data.city,
      state: data.state,
      zip: data.zip,
      gpa: data.gpa,
    };
    dispatch(addNewStudent(studentInformation));
  } catch (error) {
    dispatch(addNewStudentError(error));
  }
};
