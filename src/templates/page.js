import React from "react"
import { graphql } from "gatsby"
import QuickFind from "../components/QuickFind"
import styled from "styled-components"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
// import Layout from "../components/layout"
import "../main.css"
deckDeckGoHighlightElement()

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
      headings {
        value
      }
      fields {
        slug
      }
    }
  }
`

const Page = props => {
  const edit = `https://github.com/rockettown1/Swift_Language_Guide/blob/master/src/swift/${props.data.markdownRemark.fields.slug}.md`
  return (
    <Container>
      <QuickFind
        location={props.location}
        headings={props.data.markdownRemark.headings}
        slug={props.data.markdownRemark.fields.slug}
      />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <Contribute>
        <p>Want to contribute?</p>
        <a href={edit}>Edit this page</a>
      </Contribute>
    </Container>
  )
}

export default Page

const Container = styled.div`
  margin-bottom: 150px;
`

const Contribute = styled.div`
  p {
    font-size: 80%;
    margin-bottom: 0;
  }
`
