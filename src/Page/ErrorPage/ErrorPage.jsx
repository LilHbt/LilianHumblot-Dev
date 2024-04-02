import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error--wrapper">
      <h2 className="error--title">404</h2>
      <p className="error--text">Cette page n'existe pas!</p>
      <Link className="error--link" to="/">
        Retourner sur la page d'acceuil
      </Link>
    </div>
  );
};

export default ErrorPage;
