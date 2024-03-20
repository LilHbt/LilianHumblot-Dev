import React from "react";
import Presentation from "../../Components/Presentation/Presentation";
import SectionCompetences from "../../Components/Competences/SectionCompetences";
import { FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <div>
      <Presentation />
      <SectionCompetences />
      <FloatButton icon={<ArrowUpOutlined />} tooltip="Haut de page" />
    </div>
  );
};

export default Home;
