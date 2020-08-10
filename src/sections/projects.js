import React, { useContext } from 'react';
import { MyContext } from "components/contexts";

import projectsData from "data/projectsData";
import Project from "components/projectItem";

const ProjectSection = () => {
  const language = useContext(MyContext).language[0];
  const buttonLife = language == "PL" ? "Wersja live" : "Live demo";
  const buttonCode = language == "PL" ? "Zobacz kod" : "See code";
  const header = language == "PL" ? "Projekty" : "Projects";
  return (
    <div className="projects" id="Projects">
      <h3>{header}</h3>
      <ul>
        {projectsData.map(({ id, title, description_PL, description_EN, image, repoLink, lifeLink }, index) =>
          <li key={id}>
            <Project
              title={title}
              description={language == "PL" ? description_PL : description_EN}
              image={image || `Project${index + 1}`}
              repoLink={repoLink}
              lifeLink={lifeLink}
              buttonLife={buttonLife}
              buttonCode={buttonCode}
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProjectSection;