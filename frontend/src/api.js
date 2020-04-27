export const getStudents = () => fetch("http://localhost:8096/api/students");

export const addStudent = (student) =>
  fetch("http://localhost:8096/api/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

export const updateStudent = (student) =>
  fetch(`http://localhost:8096/api/students/${student._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

export const deleteStudent = (id) =>
  fetch(`http://localhost:8096/api/students/${id}`, {
    method: "DELETE",
  });
