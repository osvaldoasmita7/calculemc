import React from "react";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
      <div className="container-fluid " style={{ backgroundColor: "#8168e8" }}>
        <img
          src={require("../../assets/images/logo.jpg")}
          style={{ maxWidth: 200 }}
          alt=""
        ></img>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
