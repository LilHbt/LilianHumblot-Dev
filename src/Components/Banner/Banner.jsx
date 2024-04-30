import React from "react";
import "./Banner.scss";
import banner from "../../Assets/img/banner.webp";
import { FormattedMessage } from "react-intl";
import CTA from "../CTA/CTA";
import { Flex } from "antd";

export const Banner = () => {
  return (
    <div>
      <div className="banner--div">
        <Flex vertical align="start">
          <h2 className="banner--div__title">
            <FormattedMessage
              id="__BANNERTITLE__"
              defaultMessage="Bonjour, je suis Lilian Humblot"
            />
          </h2>
          <p className="banner--div__text">
            <FormattedMessage
              id="__BANNERTEXT__"
              defaultMessage="Développeur et intégrateur web"
            />{" "}
          </p>
          <CTA
            className="banner--div__cta"
            buttonText={
              <FormattedMessage
                id="__BTNCONTACT__"
                defaultMessage="Contactez moi"
              />
            }
            ctaLink="/contact"
          />
        </Flex>
      </div>
      <img
        rel="preload"
        className="banner--img"
        src={banner}
        alt="Banniere Développeur"
      />
    </div>
  );
};
