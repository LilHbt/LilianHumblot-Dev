import React from "react";
import "./Presentation.scss";
import { FormattedMessage } from "react-intl";

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="presentation--wrapper">
        <h2 className="presentation--title">
          <FormattedMessage
            id="__PRESENTATIONTITLE__"
            defaultMessage="Développeur et intégrateur web"
          />{" "}
        </h2>

        <p className="presentation--text">
          <FormattedMessage
            id="__PRESENTATION__"
            defaultMessage="Je suis Humblot Lilian, un jeune développeur web spécialisé dans
          le Front-End. Mettant les besoins du client au centre du processus de
          developpement, je saurai répondre à vos attentes et vous proposer
          les solutions les plus adaptées pour accroître votre activité"
          />
        </p>
      </div>
    </section>
  );
};

export default Presentation;
