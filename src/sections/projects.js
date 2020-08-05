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

const projectsData = [
    {
        id: 0,
        title: "ITense",
        description: "Informatyczno literacki blog stworzony za pomocą Gatsby.js oraz Strapi. Głównie w celach nabycia umiejętności pracy ze wspomnianymi narzędziami jak również utworzenia miejsca na szerzenie literackiej pasji.",
        image: null,
        lifeLink: "https://itense.netlify.app/",
        repoLink: "https://github.com/Hooded22/IT-in-society-blog"
    },
    {
        id: 1,
        title: "Clue Watson",
        description: "Aplikacja mobilna wykonana za pomocą React Native oraz Firebase. Jest interaktywnym notatnikiem do gry w Clue oraz Cluedo. Posiada kilka prostych funckji jak dodawanie histori rozgrywi czy zapis kart poszczególnych graczy. Największy projekt w moim portfolio. Stworzona w celu poznania biblioteki react native. Do jej tworzenia wykoszystano również elementy takie backendowe takie jak firebase functions oraz kilka mniejszych bibliotek np. react-navigation.",
        image: null,
        lifeLink: "https://expo.io/@hooded22/cluewatson",
        repoLink: "https://github.com/Hooded22/WatsonApp"
    },
    {
        id: 2,
        title: "Line Num Deleter",
        description: "Bardzo prosta strona będąca jednocześnie aplikacją progresywną. Umożliwia usunięcie numerów linii zostających po skopiowaniu kodu np. z dokumentu PDF. Stworzona w celu nauki sposobu działania aplikacji progresywnych oraz ułatwienia sobie pracy z materiałami laboratoryjnymi na uczelni.",
        image: null,
        lifeLink: "https://line-number-deleter.netlify.app/",
        repoLink: "https://github.com/Hooded22/Line_Num_Deleter"
    },
    {
        id: 3,
        title: "Portfolio",
        description: "Strona wizytówka będąca jednocześnie miejscem publikacji projektów. Stworzona za pomocą Gatsby.js.",
        image: null,
        lifeLink: null,
        repoLink: "https://github.com/Hooded22/Portfolio_website"
    }
   
]

const Project = ({title, description, image, repoLink, lifeLink}) => {
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
                    {lifeLink != null ? <a href = {lifeLink} target="blank" className="projectButton full">Wersja life</a> : ""}
                    {repoLink != null ? <a href = {repoLink} target="blank"  className="projectButton bordered">Zobacz kod</a> : ""}
                </div>
            </div>
        </div>
    )
}

const ProjectSection = () => {
    return (
        <div className="projects" id = "Projects">
            <h3>Projekty</h3>
            <ul>
                {projectsData.map(({ id, title, description, image, repoLink, lifeLink }, index) =>
                    <li key={id}>
                        <Project
                            title={title}
                            description={description}
                            image={image || `Project${index+1}`}
                            repoLink = {repoLink}
                            lifeLink = {lifeLink}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ProjectSection;