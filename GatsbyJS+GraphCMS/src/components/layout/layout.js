import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../header/header"
import Footer from "../footer/footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    render={data => (
      <>
        {/* Header */}
        <Header siteTitle={data.site.siteMetadata.title} />

        {/* Content */}
        <main>
          <div className="container">
            {children}
          </div>
        </main>


        {/* Footer */}
        <Footer siteAuthor={data.site.siteMetadata.author} />
      </>
    )}

    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
  `}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout