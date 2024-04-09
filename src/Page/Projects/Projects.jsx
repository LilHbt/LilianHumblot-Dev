import React from "react";
import CardProject from "../../Components/CardProject/CardProject.jsx";
import { Flex } from "antd";
import "./Projects.scss";
import logoKasa from "../../Assets/img/Kasa-logo.png";
import logoOMF from "../../Assets/img/ohmyfood.png";
import { FormattedMessage } from "react-intl";
const Projects = () => {
  return (
    <div className="projects-wrapper">
      <h2>
        <FormattedMessage id="__PROJECTSTITLE__" defaultMessage="Mes projets" />
      </h2>
      <p>
        <FormattedMessage
          id="__PROJECTSTEXT__"
          defaultMessage="Les différents projets que j'ai pu réaliser vous permettrons de mieux
        saisir mes capacités à remplir vos besoins"
        />
      </p>
      <section>
        <Flex className="project-flex" gap={32}>
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
        {/* <Row>
            <Space direction="horizontal" size={32}>
              <Col span={12}>
                <CardProject />
              </Col>
              <Col span={12}>
                <CardProject />
              </Col>
            </Space>
          </Row> */}
      </section>
    </div>
  );
};

export default Projects;
