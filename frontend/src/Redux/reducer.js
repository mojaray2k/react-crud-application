import * as actionTypes from "./actionTypes";

const initialstate = {
  students: [
    {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      zip: null,
      gpa: null,
    },
  ],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.GET_STUDENTS:
      return {
        ...state,
      };
    case actionTypes.ADD_STUDENT:
      return {
        ...state,
        students: state.students.concat(action.payload),
      };
    case actionTypes.EDIT_STUDENT:
      return state.map((student) =>
        student._id === action.id
          ? { ...student, editing: !student.editing }
          : student
      );
    case actionTypes.UPDATE_STUDENT:
      return state.map((student) => {
        if (student._id === action.id) {
          return {
            ...student,
            fname: action.data.fname,
            lname: action.data.lname,
            email: action.data.email,
            phone: action.data.phone,
            street1: action.data.street1,
            street2: action.data.street2,
            city: action.data.city,
            state: action.data.state,
            zip: action.data.zip,
            gpa: action.data.gpa,
            editing: !student.editing,
          };
        } else return student;
      });
    case actionTypes.DELETE_STUDENT:
      return state.filter((student) => student._id !== action.id);
    default:
      return state;
  }
};

export default reducer;
