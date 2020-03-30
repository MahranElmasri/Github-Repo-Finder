import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-primary ">
      <h1>
        <i className="fab fa-github m-1" />
        Github Repo Finder
      </h1>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/bookmark">Bookmarks</Link>
        </li>
      </ul>
    </nav>
  );
}
