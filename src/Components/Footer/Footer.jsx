import React from "react";
import "./Footer.scss";
import logoGitHub from "../../Assets/img/github-mark.png";
import { Flex } from "antd";
import { FormattedMessage } from "react-intl";
import LHDLogoFull from "../../Assets/img/LHDLogoFull.svg";

const Footer = () => {
  return (
    <footer>
      <Flex gap={24} align="center">
        <img style={{ height: "50px" }} src={LHDLogoFull} alt="" />
        <p>
          <FormattedMessage
            id="__FOOTERTEXT__"
            defaultMessage={"2024 - Humblot Lilian - Tous droits réservés"}
          />
        </p>
        <a href="https://github.com/LilHbt" target="blank">
          <img
            src={logoGitHub}
            style={{ height: 35, width: 35 }}
            alt="Logo GitHub"
          />
        </a>
      </Flex>
    </footer>
  );
};

export default Footer;
