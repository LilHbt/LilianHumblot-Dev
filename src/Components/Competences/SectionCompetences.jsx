import React from "react";
import { Space } from "antd";
import CardCompetences from "./CardCompetences";
import logoReact from "../../Assets/img/React.svg";
import logoHTMLCSS from "../../Assets/img/CSS3 HTML5.svg";
import logoJS from "../../Assets/img/JavaScript.png";
import { Col, Row } from "antd";
const SectionCompetences = () => {
  return (
    <section>
      <div>
        <h3>Mes compétences</h3>
        <p>que je mettrai en oeuvre pour vos projets</p>
      </div>
      <Row>
        <Col span={12}>
          {" "}
          <div>
            <h4>Compétences technique</h4>
            <Space direction="vertical" size={16}>
              <CardCompetences
                title="HTML5/CSS3"
                logo={logoHTMLCSS}
                description="description de la competence"
              />
              <CardCompetences
                title="JavaScript"
                description="description de la competence"
              />
              <CardCompetences
                title="React"
                logo={logoReact}
                description="description de la competence"
              />
            </Space>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <h4>Compétences transverses</h4>
            <Space direction="vertical" size={16}>
              <CardCompetences
                title="Ecoute et communication"
                description="description de la competence"
              />
              <CardCompetences
                title="Adaptation aux besoins"
                description="description de la competence"
              />
              <CardCompetences
                title="Flexibilté"
                description="description de la competence"
              />
            </Space>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SectionCompetences;
