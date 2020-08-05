/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {NotificationContex} from "./contexts";


import Header from "./header"
import Footer from "./footer";
import NotificationBox from "./notificationBox";
import "./layout.css"





const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [notificationConfig, setNotificationConfig] = useState({success: false, visible: false, notification: ""}) 

  return (
    <NotificationContex.Provider value = {[notificationConfig, setNotificationConfig]} >
      <NotificationBox 
        message = {notificationConfig.notification} 
        visible = {notificationConfig.visible}
        success = {notificationConfig.success} 
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: `0 1.0875rem 0`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer/>
    </NotificationContex.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
