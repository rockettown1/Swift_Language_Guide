import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"

const QuickFind = ({ headings, location, slug }) => {
  const [drop, setDrop] = useState(false)

  // useEffect(() => {
  //   data.allMarkdownRemark.edges.map(edge => {
  //     if (location.pathname.includes(edge.node.fields.slug)) {
  //       setHeadings(edge.node.headings)
  //       setSlug(edge.node.fields.slug)
  //     }
  //   })
  // }, [])

  return (
    <Container>
      <OnPage onClick={() => setDrop(!drop)}>What's on this page?</OnPage>
      {drop && (
        <Dropdown>
          {headings.map(heading => {
            return (
              <GLink
                onClick={() => setDrop(false)}
                to={`${slug}#${heading.value
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                {heading.value}
              </GLink>
            )
          })}
        </Dropdown>
      )}
    </Container>
  )
}

export default QuickFind

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100vw;
  padding: 5px;
`
const Dropdown = styled.div`
  background-color: rgba(242, 242, 242, 0.9);

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

const GLink = styled(Link)`
  text-decoration: none;
  color: #272a36;
  margin: 5px 0;
`
const OnPage = styled.button`
  background-color: #f2f2f2;
  outline: none;
  border: none;
  color: black;
  width: 250px;
  height: 25px;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`
