import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { Flex } from "antd";
import { FormattedMessage } from "react-intl";
import frenchFlag from "../../Assets/img/france.png";
import ukFlag from "../../Assets/img/united-kingdom.png";
import LHDLogo from "../../Assets/img/LHD-Logo.svg";

const Header = ({ language, setLanguage }) => {
  const changeLanguage = () => {
    if (language === "fr") {
      setLanguage("en");
    } else {
      setLanguage("fr");
    }
  };
  return (
    <header className="header">
      <Flex
        justify="space-between"
        align="center"
        style={{ height: "100%", minHeight: 100 }}
      >
        <img
          className="header--logo"
          src={LHDLogo}
          alt="Logo Lilian Humblot Dev"
        />
        <ul className="header--nav">
          <li>
            <Link className="header--nav__link" to="/">
              <FormattedMessage id="__HOMENAV__" defaultMessage={"Acceuil"} />
            </Link>
          </li>
          <li>
            <Link className="header--nav__link" to="/projects">
              <FormattedMessage
                id="__PROJECTNAV__"
                defaultMessage={"Projets"}
              />
            </Link>
          </li>
          <li>
            <Link className="header--nav__link" to="/contact">
              Contact
            </Link>
          </li>

          <button className="btn-language" onClick={changeLanguage}>
            {language === "fr" ? (
              <img style={{ width: 20 }} src={frenchFlag} alt="French flag" />
            ) : (
              <img style={{ width: 20 }} src={ukFlag} alt="UK flag" />
            )}
          </button>
        </ul>
      </Flex>
    </header>
  );
};

export default Header;
