import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Power from "../images/big_power_dark.png"
import CN from "../images/Codenation.png"
import SwiftLogo from "../images/swift-og.png"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }

      allMarkdownRemark(sort: { fields: fields___slug, order: ASC }) {
        edges {
          node {
            frontmatter {
              title
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Back src={Power} />
      <Container>
        <Main>{children}</Main>
        <Sidebar>
          <Logo src={CN} />
          <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
          <Desc>
            <Swifty src={SwiftLogo} />
            <Info>Swift Programming Language v5.2</Info>
          </Desc>
          <PageLinks>
            <p>
              <GLink to="/">Welcome</GLink>
            </p>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <p>
                  <GLink to={`/${edge.node.fields.slug}`}>
                    {edge.node.frontmatter.title}
                  </GLink>
                </p>
              )
            })}
          </PageLinks>
        </Sidebar>
        <Footer />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas:
    "main main main side"
    "main main main side"
    "main main main side";
`
const Main = styled.main`
  margin: 100px 100px 0 100px;
  grid-area: main;
  min-height: 150vh;
`

const SiteTitle = styled.h3`
  color: white;
  margin-top: 0;
`
const Swifty = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
`

const Desc = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid lightgrey;
  width: 250px;
`

const Info = styled.h3`
  color: white;
  margin-top: 15px;
`

const GLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 300px;
  position: fixed;
  top: 0;
  right: 0;
  grid-area: side;
  background-color: rgba(0, 0, 0, 0.9);
`

const PageLinks = styled.div`
  border-top: 1px solid lightgrey;
  width: 250px;
`

const Logo = styled.img`
  margin: 20px 0;
  width: 250px;
  height: auto;
`
const Back = styled.img`
  position: fixed;
  z-index: -5;
  bottom: 0;
  right: 0;
  margin-right: 300px;
  height: 600px;
  width: auto;
`
