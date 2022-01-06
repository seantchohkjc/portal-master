/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import Helmet from "react-helmet"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"

 import Header from "../_common/header"
 import Footer from "../_common/footer"

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

    return (
        <>
          <div>
            <Helmet>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" type="text/javascript"></script>
            </Helmet>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </>
    )
}
    
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout