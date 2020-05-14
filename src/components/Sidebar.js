import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import CN from "../images/Codenation.png"
import SwiftLogo from "../images/swift-og.png"

const Sidebar = ({ open, logItem, isSelected }) => {
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
    <SidebarContainer open={open}>
      <Logo src={CN} />
      <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>

      <Desc>
        <Swifty src={SwiftLogo} />
        <Info>Swift Programming Language v5.2</Info>
      </Desc>
      <PageLinks>
        <p>
          <GLink
            to="/"
            onClick={() => logItem("welcome")}
            selected={isSelected == "welcome" ? true : ""}
          >
            Welcome
          </GLink>
        </p>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <p key={index}>
              <GLink
                to={`/${edge.node.fields.slug}`}
                onClick={() => logItem(edge.node.fields.slug)}
                selected={isSelected == edge.node.fields.slug ? true : ""}
              >
                {edge.node.frontmatter.title}
              </GLink>
            </p>
          )
        })}
      </PageLinks>
    </SidebarContainer>
  )
}

export default Sidebar

const SiteTitle = styled.h3`
  color: white;
  margin-top: 0;
`
const Swifty = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 5px;
  margin-right: 10px;
`

const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  width: 250px;
  height: 100px;
`

const Info = styled.h3`
  color: white;

  width: 165px;
`

const GLink = styled(Link)`
  color: white;
  ${({ selected }) =>
    selected &&
    css`
      color: #e4b040;
    `}
  font-size: 80%;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 650px) {
    &:hover {
      text-decoration: none;
    }
  }
`

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 300px;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  grid-area: side;
  background-color: #1a1a1a;
  overflow: scroll;
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 650px) {
    background-color: #1a1a1a;
    width: 100vw;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(150%)")};
  }
`

const PageLinks = styled.div`
  width: 250px;
  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 20px;
    padding-top: 30px;
    box-sizing: border-box;
    p {
      margin: 5px;
    }
  }
`

const Logo = styled.img`
  margin: 20px 0;
  width: 250px;
  height: auto;
`
