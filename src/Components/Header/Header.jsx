import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { Flex } from "antd";

const Header = () => {
  return (
    <header className="header">
      <Flex
        justify="space-between"
        align="center"
        style={{ height: "100%", minHeight: 100 }}
      >
        <h1 className="header--title">Lilian Humblot Dev</h1>
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
      </Flex>
    </header>
  );
};

export default Header;
