import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";
import { FormattedMessage } from "react-intl";

const ErrorPage = () => {
  return (
    <div className="error--wrapper">
      <h2 className="error--title">404</h2>
      <p className="error--text">
        <FormattedMessage
          id="__ERRORTEXT__"
          defaultMessage={"Cette page n'existe pas!"}
        />
      </p>
      <Link className="error--link" to="/">
        <FormattedMessage
          id="__HOMELINK__"
          defaultMessage={"Retourner sur la page d'acceuil"}
        />
      </Link>
    </div>
  );
};

export default ErrorPage;
