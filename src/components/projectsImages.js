import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectsImage = ({ imageName, className, imageStyle }) => {
    const data = useStaticQuery(graphql`
        query {
          Project1: file(relativePath: { eq: "Projects/Project_1.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          Project2: file(relativePath: { eq: "Projects/Project_2.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          Project3: file(relativePath: { eq: "Projects/Project_3.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          Project4: file(relativePath: { eq: "Projects/Project_5.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        }
      `)
  
    return <Img fluid={data[imageName].childImageSharp.fluid} className="projectImage" imgStyle={imageStyle} />
  }

  export default ProjectsImage;