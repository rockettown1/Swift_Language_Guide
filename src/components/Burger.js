import React from "react"
import styled from "styled-components"

const Burger = ({ open, setOpen, width, show }) => {
  return (
    <>
      {width <= 650 ? (
        <BurgerContainer>
          <StyledBurger
            open={open}
            onClick={() => {
              setOpen(!open)
            }}
            show={show}
          >
            <div />
            <div />
            <div />
          </StyledBurger>
        </BurgerContainer>
      ) : null}
    </>
  )
}

export default Burger

const StyledBurger = styled.div`
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  top: 30px;
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;

    transform-origin: 1px;
    margin-left: ${({ open }) => (open ? "4px" : "0px")};
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const BurgerContainer = styled.button`
  background-color: #f5b32f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  outline: none;
  border: none;
`
