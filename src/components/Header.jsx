import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <nav className="flex">
      <ul className="flex">
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
