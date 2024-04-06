import React from "react";
import "./Presentation.scss";

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="presentation--wrapper">
        <h2 className="presentation--title">Developpeur et intégrateur web </h2>
        <p className="presentation--text">
          Je suis Humblot Lilian, un jeune developpeur web spécialisé dans le
          Front-End.
          <br />
          Mettant les besoins du client au centre du processus de developpement
          , je saurai répondre à vos attentes et vous proposer les solutions les
          plus adaptées pour accroitre votre activité
        </p>
      </div>
    </section>
  );
};

export default Presentation;
