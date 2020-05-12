import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/Welcome"
import "../main.css"
deckDeckGoHighlightElement()

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Welcome />
    </Layout>
  )
}

export default IndexPage
