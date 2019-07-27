import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from './footer';
import "../assets/allStyles.css"

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

  // console.log('layout', location);
  return (
    <div style={{ position: 'relative' }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="bg-container">
        {children}
        <div style={{position: 'sticky', bottom: '0'}}>
          <div className="tri" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
