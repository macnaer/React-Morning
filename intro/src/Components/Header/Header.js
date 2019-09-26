import React, {Fragment} from "react";
import {Link, BrowserRouter as Router} from "react-router-dom";

import "./Header.css";


const Header = () => {
    return (
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="row">
            <h2 className="text-center">
              <span>Contact list</span>Created with{" "}
              <i className="fa fa-heart"></i> for me
            </h2>
          </div>
        </Fragment>
    );
}

export default Header;