import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* 去camera page前要先進去 introduction */}
          <Link to="/introduction">Camera</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
