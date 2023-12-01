import React from "react";
import { Link } from "react-router-dom";

export const StudentDashboard = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/tool/fact-generator">Fact Generator</Link>
        </li>
      </ul>
    </>
  );
};
