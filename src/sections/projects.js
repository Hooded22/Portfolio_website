import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imageName, className, imageStyle }) => {
    const data = useStaticQuery(graphql`
      query {
        Project1: file(relativePath: { eq: "Projects/Project_1.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        Project2: file(relativePath: { eq: "Project_2.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        Project3: file(relativePath: { eq: "Project_3.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        Project4: file(relativePath: { eq: "Project_4.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
        },
      }
    `)

    return <Img fluid={data[imageName].childImageSharp.fluid} className="projectImage" imgStyle={imageStyle} />
}

const projectsData = [
    {
        id: 0,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur ligula, ac bibendum nisi. Sed dignissim felis quis orci egestas malesuada. Etiam sed justo eget lorem venenatis pharetra. Suspendisse convallis purus eu tortor rutrum molestie. Ut hendrerit lorem sit amet consectetur semper. Donec vitae fermentum nun",
        image: null
    },
    {
        id: 1,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur ligula, ac bibendum nisi. Sed dignissim felis quis orci egestas malesuada. Etiam sed justo eget lorem venenatis pharetra. Suspendisse convallis purus eu tortor rutrum molestie. Ut hendrerit lorem sit amet consectetur semper. Donec vitae fermentum nun",
        image: null
    },
    {
        id: 2,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur ligula, ac bibendum nisi. Sed dignissim felis quis orci egestas malesuada. Etiam sed justo eget lorem venenatis pharetra. Suspendisse convallis purus eu tortor rutrum molestie. Ut hendrerit lorem sit amet consectetur semper. Donec vitae fermentum nun",
        image: null
    },
    {
        id: 3,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed efficitur ligula, ac bibendum nisi. Sed dignissim felis quis orci egestas malesuada. Etiam sed justo eget lorem venenatis pharetra. Suspendisse convallis purus eu tortor rutrum molestie. Ut hendrerit lorem sit amet consectetur semper. Donec vitae fermentum nun",
        image: null
    }
]

const Project = ({title, description, image}) => {
    return (
        <div className="projectItem">
            <div className="imageWrapper">
                <Image
                    imageName = {image}
                />
            </div>
            <div className="descriptionWrapper">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="buttonWrapper">
                    <button className="full">Life demo</button>
                    <button className="bordered">Zobacz projekty</button>
                </div>
            </div>
        </div>
    )
}

const ProjectSection = () => {
    return (
        <div className="projects">
            <h3>Projekty</h3>
            <ul>
                {projectsData.map(({ id, title, description, image }) =>
                    <li key={id}>
                        <Project
                            title={title}
                            description={description}
                            image={image || `Project1`}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ProjectSection;