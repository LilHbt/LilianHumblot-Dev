import React from "react";
import { Card } from "antd";
import "./CardCompetences.scss";

const CardCompetences = (props) => {
  const { logo } = props;
  const { title } = props;
  const { alt } = props;
  const { description } = props;
  return (
    <Card
      hoverable
      title={title}
      bordered={true}
      style={{
        width: 300,
      }}
    >
      <img src={logo} alt={alt} />
      <p>{description}</p>
    </Card>
  );
};

export default CardCompetences;
