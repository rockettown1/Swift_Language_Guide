import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import SEO from "../components/seo"
import Welcome from "../components/Welcome"
import "../main.css"
deckDeckGoHighlightElement()

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Welcome />
    </>
  )
}

export default IndexPage
