import React from "react";
import AddEditForm from "../Components/Forms/AddEditForm";

const Home = () => {
  return (
    <React.Fragment>
      <h1>Student Enrollment Form</h1>
      <AddEditForm />
      <style jsx="true">{`
        form {
          text-align: left;
          width: 50%;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Home;
