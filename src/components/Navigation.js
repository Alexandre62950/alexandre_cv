import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/alex.jpg" alt="profil-pic" />
          <h3>Alexandre Kot</h3>
        </div>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <NavLink exact to="/" activeClassname="navActive">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/knowledges" activeClassname="navActive">
                <i className="fas fa-book"></i>
                <span>Knowledges</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/portfolio" activeClassname="navActive">
                <i className="fas fa-images"></i>
                <span>Portfolio</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassname="navActive">
                <i className="fas fa-phone"></i>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen"></i>
              </a>
            </li>
          </ul>

<div className="signature">
  
<p>Alexandre Kot - 2022</p>
</div>
        </div>
      </div>
    
  );
};

export default Navigation;
