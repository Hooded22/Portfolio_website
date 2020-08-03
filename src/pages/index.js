import React from "react"
import { Link } from "gatsby"

import "../css/style.scss";

import Layout from "../components/layout"
import SEO from "../components/seo"
import WelcomeSection from "../sections/welcome";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeSection/>
  </Layout>
)

export default IndexPage
