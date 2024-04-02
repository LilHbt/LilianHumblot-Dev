import { Card } from "antd";
import React from "react";

const CardProject = (props) => {
  const { title } = props;
  const { alt } = props;
  const { source } = props;
  const { description } = props;
  const { siteToVisit } = props;
  return (
    <Card title={title} style={{ minHeight: 300 }}>
      <img
        src={source}
        alt={alt}
        style={{ width: 150, height: 40, margin: "0 auto" }}
      />
      <p>{description}</p>
      <a
        href={siteToVisit}
        target="blank"
        style={{ color: "#171D1C", textDecoration: "underline" }}
      >
        Visiter le site
      </a>
    </Card>
  );
};

export default CardProject;
