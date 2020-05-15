import React from "react"
import styled from "styled-components"
import FB from "../images/fb.png"
import IN from "../images/in.png"
import Insta from "../images/insta.png"

const Social = () => {
  return (
    <Container>
      <a href="https://www.facebook.com/wearecodenation/">
        <Soc src={FB} />
      </a>
      <a href="https://www.linkedin.com/company/wearecodenation/">
        <Soc src={IN} />
      </a>
      <a href="https://www.instagram.com/wearecodenation/?hl=en">
        <Soc src={Insta} />
      </a>
    </Container>
  )
}

export default Social

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Soc = styled.img`
  height: 25px;
  margin: 10px 10px 0px 20px;
  @media screen and (max-width: 650px) {
    margin: 10px 10px 0px 10px;
  }
`
