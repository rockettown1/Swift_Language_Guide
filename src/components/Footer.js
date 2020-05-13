import React, { useEffect } from "react"
import styled from "styled-components"
let date = new Date()

const Footer = () => {
  return (
    <Container>
      <Website href="https://www.wearecodenation.com">
        wearecodenation.com
      </Website>
      <Now>©{date.getFullYear()}</Now>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  bottom: 0;
  width: 100vw;
  height: 50px;
  z-index: 0;
`

const Website = styled.a`
  margin: 0;
  color: white;
  position: relative;
  text-decoration: none;
`
const Now = styled.p`
  color: white;
  font-size: 90%;
`
