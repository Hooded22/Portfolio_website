import React from "react"

import "src/css/style.scss";

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import WelcomeSection from "src/sections/welcome";
import SkillsSection from "src/sections/skills";
import ProjectSection from "src/sections/projects"
import AboutMeSection from "src/sections/aboutMe";
import ContactSection from "src/sections/contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeSection/>
    <SkillsSection/>
    <ProjectSection/>
    <AboutMeSection/>
    <ContactSection/>
  </Layout>
)

export default IndexPage
