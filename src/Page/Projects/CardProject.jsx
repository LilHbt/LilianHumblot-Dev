import { Card } from "antd";
import React from "react";

const CardProject = (props) => {
  const { title } = props;
  const { alt } = props;
  const { source } = props;
  const { description } = props;
  const { siteToVisit } = props;
  return (
    <Card
      style={{ width: 500, height: 300 }}
      title={title}
      cover={<img src={source} alt={alt} />}
    >
      <p>{description}</p>
      <a href={siteToVisit} target="blank">
        Visiter le site
      </a>
    </Card>
  );
};

export default CardProject;
