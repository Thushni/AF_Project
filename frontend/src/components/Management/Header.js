import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import './header.css'
library.add(faUser);



function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a
          className="navbar-brand fw-bold fst-italic fs-2"
          href="#"
          style={{ color: "#FFFFFF" }}
        >
          Stella Travel
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul className="navbar-nav">
            <li className="nav-item" >
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
               <button class="btn btn-outline-light form-control mr-sm-2" type="submit">Search</button>

              </form>
            </li>

            <li className="nav-item">
              <a className="nav-link active fs-6 "  style={{ color: "#FFFFFF", fontWeight: "bold" }} aria-current="page"  href="http://localhost:3000/payment">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fs-6" style={{ color: "#FFFFFF", fontWeight: "bold" }} href="/">
                Hotels
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fs-6" href="#" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Guides
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fs-6" href="#" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Packages
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fs-6" href="#" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Transport
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fs-6"   href="/allHOTEL-table" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Management
              </a>
            </li>
         
            <li className="nav-item">
              <a className="nav-link fs-6"   href="/" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Support
              </a>
            </li>

<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>


<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
  </Link>
</li>

            <li className="nav-item">
  <Link className="nav-link fs-6" to="/register" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
    <FontAwesomeIcon icon={faUser}  /> Register
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link fs-6" to="/login" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
    <FontAwesomeIcon icon={faUser} /> Sign in
  </Link>
</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
