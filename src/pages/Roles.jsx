import React from "react";
import { Link } from "react-router-dom";

export const Roles = () => {
  return (
    <ul>
      <li>
        <Link to="/student/signin">Student</Link>
      </li>
      <li>
        <Link to="/teacher/signin">Teacher</Link>
      </li>
    </ul>
  );
};
