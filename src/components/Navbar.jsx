import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/roles'>Signin</Link>
        </li>
      </ul>
    </nav>
  );
};
