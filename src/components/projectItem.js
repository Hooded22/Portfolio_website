import React from "react";
import ProjectsImage from "./projectsImages";

const Project = ({ title, description, image, repoLink, lifeLink, buttonLife, buttonCode }) => {
    return (
      <div className="projectItem">
        <div className="imageWrapper">
          <ProjectsImage
            imageName={image}
          />
        </div>
        <div className="descriptionWrapper">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="buttonWrapper">
            {lifeLink != null ? <a href={lifeLink} target="blank" title={buttonLife} className="projectButton full">{buttonLife}</a> : null}
            {repoLink != null ? <a href={repoLink} target="blank" title={buttonCode} className="projectButton bordered">{buttonCode}</a> : null}
          </div>
        </div>
      </div>
    )
  }

  export default Project;