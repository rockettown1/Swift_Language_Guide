import React, { useEffect } from "react"
import styled from "styled-components"
import Social from "./Social"
let date = new Date()

const Footer = () => {
  return (
    <Container>
      <Social />
      <Website href="https://www.wearecodenation.com">
        wearecodenation.com ©{date.getFullYear()}
      </Website>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.9);
  bottom: 0;
  width: 100vw;
  height: 85px;
  z-index: 0;
`

const Website = styled.a`
  margin: 0;
  color: white;
  margin: 0 20px;
  position: relative;
  text-decoration: none;
`
const Now = styled.h6`
  color: white;
  font-size: 90%;
  margin: 0;
  margin-left: 20px;
`
