import React, { useState } from "react";
import { Flex, Tabs } from "antd";
import CardCompetences from "./CardCompetences";
import logoReact from "../../Assets/img/React.svg";
import logoHTMLCSS from "../../Assets/img/logo-html-css.png";
import logoJS from "../../Assets/img/logo-javascript.svg";
import logoKasa from "../../Assets/img/Kasa-logo.png";
import logoOMF from "../../Assets/img/ohmyfood.png";
import imgCom from "../../Assets/img/comIcon.png";
import imgAdaptation from "../../Assets/img/adaptation.png";
import imgFlex from "../../Assets/img/flexibility.svg";
import { useInView } from "react-intersection-observer";
import "./SectionCompetences.scss";
import CardProject from "../CardProject/CardProject.jsx";
import "animate.css";
import { FormattedMessage } from "react-intl";

const SectionCompetences = () => {
  const [tabKey, setTabKey] = useState("1");

  const onChange = (key) => {
    setTabKey(key);
  };

  const items = [
    {
      key: "1",
      label: (
        <FormattedMessage
          id="__LABELHARDSKILL__"
          defaultMessage={"Compétences techniques"}
        />
      ),

      children: (
        <div>
          <div className="cards-flex">
            <CardCompetences
              tabKey={tabKey}
              title="React"
              logo={logoReact}
              alt="Logo React"
              description={
                <FormattedMessage
                  id="__REACTDESCRIPTION__"
                  defaultMessage={
                    "React est une bibliothèque basée sur le language Javascript permettant de fractionner le code en composant réutilisable et fournissant beaucoup d'outils pour améliorer le développement. React est extrêmement populaire auprès de nombreux développeurs."
                  }
                />
              }
              modalContent={
                <CardProject
                  style={{ margin: "50px " }}
                  title="Kasa"
                  source={logoKasa}
                  alt="Logo Kasa"
                  description={
                    <FormattedMessage
                      id="__KASADESCRIPTION__"
                      defaultMessage={
                        "Site de location immobiliaire créé en utilisant React, la bibliothèque Javascript la plus populaire parmit les développeurs web. L'utilisation de React permet d'obtenir un code réutilisable et facilment maintenable."
                      }
                    />
                  }
                  siteToVisit="https://lilhbt.github.io/Kasa/"
                />
              }
            />
            <CardCompetences
              tabKey={tabKey}
              title="JavaScript"
              logo={logoJS}
              alt="Logo Javascript"
              description={
                <FormattedMessage
                  id="__JSDESCRIPTION__"
                  defaultMessage={
                    "Javascript est un language de programmation permettant d'ajouter de l'intéractivité à la page web."
                  }
                />
              }
            />

            <CardCompetences
              tabKey={tabKey}
              title="HTML5/CSS3"
              logo={logoHTMLCSS}
              alt="Logo HTML/CSS"
              description={
                <FormattedMessage
                  id="__HTMLDESCRIPTION__"
                  defaultMessage={
                    "Les languages HTML et CSS forment la base du dévelopement web, le premier permet de structurer la page et ensuite le second offre la possibilité de styliser le site."
                  }
                />
              }
              modalContent={
                <CardProject
                  title="Oh-My-Food"
                  source={logoOMF}
                  alt="Logo Oh-My-Food"
                  description={
                    <FormattedMessage
                      id="__OMFDESCRIPTION__"
                      defaultMessage={
                        "Projet de site de prise de commande, utilisant uniquement HTML5/CSS3 pour l'intégralite du code. Cette technologie permet de créer un site vitrine très rapidement avec enormément de possiblités pour le style."
                      }
                    />
                  }
                  siteToVisit="https://lilhbt.github.io/Oh-my-food/"
                />
              }
            />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <FormattedMessage
          id="__LABELSOFTSKILL__"
          defaultMessage={"Compétences transverses"}
        />
      ),
      children: (
        <div>
          <div className="cards-flex">
            <CardCompetences
              tabKey={tabKey}
              logo={imgCom}
              alt="Icon Communication"
              title={
                <FormattedMessage
                  id="__COMMUNICATIONTITLE__"
                  defaultMessage={"Ecoute et communication"}
                />
              }
              description={
                <FormattedMessage
                  id="__COMMUNICATIONDESCRIPTION__"
                  defaultMessage={
                    "Grâce à mes expériences professionelle passée, j'ai pu acquérir une grande capacité de communication afin d'être certain d'obtenir et de transmettre toutes les informations necéssaire au bon déroulement d'un projet."
                  }
                />
              }
            />
            <CardCompetences
              tabKey={tabKey}
              logo={imgAdaptation}
              alt="Icon Adaptation"
              title={
                <FormattedMessage
                  id="__ADAPTATIONTITLE__"
                  defaultMessage={"Adaptation aux besoins"}
                />
              }
              description={
                <FormattedMessage
                  id="__ADAPTATIONDESCRIPTION__"
                  defaultMessage={
                    "Ma capacité d'adaptation à vos besoins me permettra de mettre a profits toutes mes connaissances afin de les utiliser au mieux pour votre projet."
                  }
                />
              }
            />
            <CardCompetences
              tabKey={tabKey}
              logo={imgFlex}
              alt="Icon Flexibilité"
              title={
                <FormattedMessage
                  id="__FLEXIBILITYTITLE__"
                  defaultMessage={"Flexibilité"}
                />
              }
              description={
                <FormattedMessage
                  id="__FLEXIBILITYDESCRIPTION__"
                  defaultMessage={
                    "Je saurai mettre en place de nouvelle méthode et toujours rester au courant des nouveautés afin de vous proposer un projet au goût du jour."
                  }
                />
              }
            />
          </div>
        </div>
      ),
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const sectionInView = () => {
    if (inView === true) {
      document
        .getElementById("animate-div")
        .classList.add("animate__animated", "animate__zoomIn");
    }
  };
  sectionInView();
  return (
    <section>
      <div className="competences--text">
        <h3 className="competences--text__title">
          <FormattedMessage
            id="__COMPETENCESTITLE__"
            defaultMessage={"Mes compétences"}
          />
        </h3>
        <p className="competences--text__subtitle">
          <FormattedMessage
            id="__COMPETENCESTEXT__"
            defaultMessage={"que je mettrai en oeuvre pour vos projets"}
          />
        </p>
      </div>
      <div id="animate-div" ref={ref}>
        <Flex
          style={{ marginTop: "64px" }}
          justify="center"
          align="center"
          gap={100}
        >
          <Tabs
            animated
            size="middle"
            centered
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            className="tabs"
          />
        </Flex>
      </div>
    </section>
  );
};

export default SectionCompetences;
