import React from "react";
import CardProject from "./CardProject";
import { Col, Row, Space } from "antd";

const Projects = () => {
  return (
    <div>
      <h2>Mes projets</h2>
      <p>
        Les différents projets que j'ai pu réaliser vous permettrons de mieux
        saisir mes capacités à remplir vos besoins{" "}
      </p>
      <section>
        <Space align="center" direction="vertical" size={32}>
          <Row>
            <Col span={24}>
              <CardProject />
            </Col>
          </Row>
          <Row>
            <Space direction="horizontal" size={32}>
              <Col span={12}>
                <CardProject />
              </Col>
              <Col span={12}>
                <CardProject />
              </Col>
            </Space>
          </Row>
          <Row>
            <Space direction="horizontal" size={32}>
              <Col span={12}>
                <CardProject />
              </Col>
              <Col span={12}>
                <CardProject />
              </Col>
            </Space>
          </Row>
        </Space>
      </section>
    </div>
  );
};

export default Projects;
