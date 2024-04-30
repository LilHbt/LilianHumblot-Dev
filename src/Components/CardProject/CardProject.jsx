import { Card } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

const CardProject = (props) => {
  const { title } = props;
  const { alt } = props;
  const { source } = props;
  const { description } = props;
  const { siteToVisit } = props;
  return (
    <Card
      className="card-project"
      title={title}
      style={{
        minHeight: 300,
        width: "66%",
        maxWidth: "500px",
        margin: "auto 50px",
      }}
    >
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
        <FormattedMessage
          id="__VISITSITE__"
          defaultMessage={"Visiter le site"}
        />
      </a>
    </Card>
  );
};

export default CardProject;
