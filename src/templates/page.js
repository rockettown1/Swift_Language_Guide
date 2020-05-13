import React from "react"
import { graphql } from "gatsby"
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
    }
  }
`

const Page = props => {
  return (
    <>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </>
  )
}

export default Page
