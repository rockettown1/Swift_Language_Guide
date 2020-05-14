import React from "react"
import { graphql } from "gatsby"
import QuickFind from "../components/QuickFind"
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
  return (
    <>
      <QuickFind
        location={props.location}
        headings={props.data.markdownRemark.headings}
        slug={props.data.markdownRemark.fields.slug}
      />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </>
  )
}

export default Page
