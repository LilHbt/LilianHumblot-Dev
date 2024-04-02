import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./CTA.scss";

const CTA = (props) => {
  const { buttonText } = props;
  const { ctaLink } = props;
  return (
    <Link to={ctaLink}>
      <Button size="large" className="CTA">
        {buttonText}
      </Button>
    </Link>
  );
};

export default CTA;
