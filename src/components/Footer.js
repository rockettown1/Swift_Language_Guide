import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Container>
      <p>Dan Krishnan @ CN</p>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
  padding-left: 100px;
`
