import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <div
        className="container"
        style={{
          maxWidth: "140rem",
          padding: "4.2rem 2.4rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="logo-brand">
          <a>Hasnain</a>
        </div>
        <nav>
          <ul style={{
          display: "flex",
          gap: "3.2rem",
          
        }}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/login">login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
