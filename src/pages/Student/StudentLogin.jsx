import React from "react";
import { Login } from "../../components";
import { Link } from "react-router-dom";

export const StudentLogin = () => {
  return (
    <>
      <Link to="/student/signup">Register</Link>
      <Login role="student" />
    </>
  );
};
