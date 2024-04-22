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
          le Front-End. J'ai suivi une formation d'intégrateur web sur la plateforme OpenClassroom, qui me permet d'obtenir un diplôme de niveau 5 (Bac+2).Mettant les besoins du client au centre du processus de
          développement, je saurai répondre à vos attentes et vous proposer
          les solutions les plus adaptées pour accroître votre activité. "
          />
        </p>
      </div>
    </section>
  );
};

export default Presentation;
