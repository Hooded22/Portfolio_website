import React from "react"

import "../css/style.scss";

import Layout from "../components/layout"
import SEO from "../components/seo"
import WelcomeSection from "../sections/welcome";
import SkillsSection from "../sections/skills";
import ProjectSection from "../sections/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeSection/>
    <SkillsSection/>
    <ProjectSection/>
  </Layout>
)

export default IndexPage
