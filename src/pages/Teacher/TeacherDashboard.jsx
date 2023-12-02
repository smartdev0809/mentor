import React from "react";
import { Link } from "react-router-dom";

export const TeacherDashboard = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/tool/lesson-plan-generator">Lesson Plan</Link>
        </li>
      </ul>
    </>
  );
};
