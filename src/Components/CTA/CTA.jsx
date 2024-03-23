import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CTA = (props) => {
  const { buttonText } = props;
  const { ctaLink } = props;
  return (
    <Link to={ctaLink}>
      <Button
        style={{
          margin: 50,

          width: 300,
        }}
        className="CTA"
      >
        {buttonText}
      </Button>
    </Link>
  );
};

export default CTA;
