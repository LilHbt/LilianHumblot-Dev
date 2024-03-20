import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src="logo" alt="Logo Lilian Humblot Dev" />
      <h1>Lilian Humblot Dev</h1>
      <ul className="header--nav">
        <li>
          <Link className="header--nav__link" to="/">
            Acceuil
          </Link>
        </li>
        <li>
          <Link className="header--nav__link" to="/projects">
            Projets
          </Link>
        </li>
        <li>
          <Link className="header--nav__link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
