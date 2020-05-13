import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Power from "../images/big_power_dark.png"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Burger from "./Burger"
import Menu from "./Menu"

const Layout = ({ children }) => {
  let defaultWindow = { innerWidth: undefined }
  if (typeof window !== `undefined`) {
    defaultWindow = window
  }
  const [width, setWidth] = useState(defaultWindow.innerWidth)
  const start = width > 650 ? true : false
  const [open, setOpen] = useState(start)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (width > 650) {
      setOpen(true)
      console.log("useEffect has run")
    }
  }, [])
  //handle width for resize renders
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
  }, [width])

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
    if (width > 650) {
      setOpen(true)
    }
  }

  return (
    <>
      <Back src={Power} />
      <Container>
        <Main>{children}</Main>
        <Sidebar open={open} width={width} setOpen={setOpen} />
        <MenuContainer show={show}>
          <Burger open={open} setOpen={setOpen} width={width} show={show} />
        </MenuContainer>
        <Footer />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas:
    "main main main side"
    "main main main side"
    "main main main side";
  @media screen and (max-width: 650px) {
    width: 100vw;

    /* h1 {
      font-size: 200%;
    } */
    p {
      font-size: 110%;
    }
  }
`

const MenuContainer = styled.div`
  width: 100%;
  z-index: 20;
  position: fixed;
  height: 20px;
  width: 20px;
  bottom: ${({ show }) => (show ? "100px" : "-300px")};
  right: 20px;
  margin-right: 50px;
  transition: bottom 0.3s ease-in-out;
  @media screen and (max-width: 500px) {
    position: fixed;
  }
`

const Main = styled.main`
  margin: 100px 100px 0 100px;
  grid-area: main;
  min-height: 150vh;
  @media screen and (max-width: 850px) {
    margin: 100px 130px 0 30px;
  }
  @media screen and (max-width: 650px) {
    box-sizing: border-box;
    margin: 100px 0;
    padding: 30px;
    width: 100vw;
  }
`

const Back = styled.img`
  position: fixed;
  z-index: -5;
  bottom: 0;
  right: 0;
  margin-right: 300px;
  height: 600px;
  width: auto;
  @media screen and (max-width: 650px) {
    margin-right: 0;
  }
`
