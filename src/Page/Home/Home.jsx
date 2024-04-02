import React from "react";
import Presentation from "../../Components/Presentation/Presentation";
import SectionCompetences from "../../Components/Competences/SectionCompetences";
import { Flex, FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import CTA from "../../Components/CTA/CTA";
import "./Home.scss";

const Home = () => {
  const goToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Presentation />
      <SectionCompetences />
      <Flex className="cta-flex" justify="center" align="center">
        <CTA buttonText="Voir mes projets" ctaLink="/projects" />
        <CTA buttonText="Me contacter" ctaLink="/contact" />
      </Flex>
      <FloatButton
        icon={<ArrowUpOutlined />}
        tooltip="Haut de page"
        onClick={goToTop}
      />
    </div>
  );
};

export default Home;
