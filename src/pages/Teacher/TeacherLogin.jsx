import React from "react";
import { Login } from "../../components";
import { Link } from "react-router-dom";

export const TeacherLogin = () => {
  return (
    <>
      <Link to="/teacher/signup">Register</Link>
      <Login role="teacher"/>
    </>
  );
};
