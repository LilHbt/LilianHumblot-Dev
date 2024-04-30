import React from "react";
import CardProject from "../../Components/CardProject/CardProject.jsx";
import { Flex } from "antd";
import "./Projects.scss";
import logoKasa from "../../Assets/img/Kasa-logo.png";
import logoOMF from "../../Assets/img/ohmyfood.png";
import { FormattedMessage } from "react-intl";
const Projects = () => {
  return (
    <div>
      <div className="project">
        <h2 className="project--title">
          <FormattedMessage
            id="__PROJECTSTITLE__"
            defaultMessage="Mes projets"
          />
        </h2>
        <p className="project--text">
          <FormattedMessage
            id="__PROJECTSTEXT__"
            defaultMessage="Les différents projets que j'ai pu réaliser vous permettrons de mieux
        saisir mes capacités à remplir vos besoins"
          />
        </p>
      </div>
      <section className="project-cards">
        <Flex
          justify="center"
          className="project-flex"
          gap={32}
          style={{ margin: "100px auto" }}
        >
          <CardProject
            title="Kasa"
            source={logoKasa}
            alt="Logo Kasa"
            description={
              <FormattedMessage
                id="__KASADESCRIPTION__"
                defaultMessage="Site de location immobiliaire créé en utilisant React, la bibliothèque Javascript la plus populaire parmit les developpeurs web. L'utilisaion de React permet d'obtenir un code réutilisable et facilment maintenable."
              />
            }
            siteToVisit="https://lilhbt.github.io/Kasa/"
          />

          <CardProject
            title="Oh-My-Food"
            source={logoOMF}
            alt="Logo Oh-My-Food"
            description={
              <FormattedMessage
                id="__OMFDESCRIPTION__"
                defaultMessage="Projet de site de prise de commande, utilisant uniquement HTML5/CSS3 pour l'intégralite du code.
                Cette technologie permet de créer un site vitrine très rapidement avec enormément de possiblités pour le style. "
              />
            }
            siteToVisit="https://lilhbt.github.io/Oh-my-food/"
          />
        </Flex>
      </section>
    </div>
  );
};

export default Projects;
