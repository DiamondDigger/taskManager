import React from "react";
import { Link } from "react-router-dom";
import "./styles/Layout/layout.css";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="view1">View mode 1</Link>
              <Link to="view2">View mode 2</Link>
              <Link to="view3">View mode 3</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Layout;
