import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const NotFoud = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Sorry, this page does not exist</h3>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoud;
