import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link as GLink } from "gatsby"

const Menu = ({ open, setOpen }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <StyledMenu open={open}>
      <LinkContainer>
        <MenuLink to="/">
          <h1>Home</h1>
        </MenuLink>
        <MenuLink to="/blog">
          <h1>Noise</h1>
        </MenuLink>
      </LinkContainer>
    </StyledMenu>
  )
}
export default Menu

const StyledMenu = styled.nav`
  width: 100%;
  display: flex;
  height: 40px;
  justify-content: flex-end;
  padding: 2rem 0;
  position: absolute;
  background-color: rgba(16, 26, 45, 1);

  /* border-bottom: 5px solid lightgrey; */
  z-index: 9;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-150%)")};
  @media screen and (max-width: 650px) {
    position: relative;
    height: auto;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-150%)")};
    margin-left: 0px;
    background-color: rgba(16, 26, 45, 1);
    flex-direction: column;
    align-items: flex-start;
  }
`

const LinkContainer = styled.div`
  height: 100%;
  margin-right: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`

const MenuLink = styled(GLink)`
  margin: 10px 20px;
  text-decoration: none;
  font-size: 120%;
  color: white;
  box-sizing: border-box;
  padding: 5px;
  h1 {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 0;
  }
  &:hover {
    border-bottom: 1px solid #d0898d;
  }
  @media screen and (max-width: 500px) {
    margin: 10px 0px;
  }
`
