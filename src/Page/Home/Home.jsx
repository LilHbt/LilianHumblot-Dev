import React from "react";
import Presentation from "../../Components/Presentation/Presentation";
import SectionCompetences from "../../Components/Competences/SectionCompetences";
import { Flex, FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import CTA from "../../Components/CTA/CTA";
import "./Home.scss";
import { FormattedMessage } from "react-intl";
import { Banner } from "../../Components/Banner/Banner";

const Home = () => {
  const goToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Banner />
      <Presentation />
      <SectionCompetences />
      <Flex className="cta-flex" justify="center" align="center" gap={30}>
        <CTA
          buttonText={
            <FormattedMessage
              id="__BTNPROJECTS__"
              defaultMessage="Voir mes projets"
            />
          }
          ctaLink="/projects"
        />
        <CTA
          buttonText={
            <FormattedMessage
              id="__BTNCONTACT__"
              defaultMessage="Contactez moi"
            />
          }
          ctaLink="/contact"
        />
      </Flex>
      <FloatButton icon={<ArrowUpOutlined />} onClick={goToTop} />
    </div>
  );
};

export default Home;
