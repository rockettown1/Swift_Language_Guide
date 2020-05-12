import React from "react"
import styled from "styled-components"

const Welcome = () => {
  return (
    <Container>
      <Title>Welcome!</Title>
      <H1>
        This is our beginner-friendly guide to the Swift Programming Language 😃
      </H1>
      <P>
        This site is designed to introduce you to Swift programming and what
        makes it ace! Think of it as a friendly entry-point, or just an
        easier-to-understand version of Apple's Swift documentation. In the
        future we may add some amazing tutorials for you to get stuck into, but
        primarily it's a guide to writing Swift code.
      </P>
      <P>
        If you're wanting to take a deep dive into Swift and quickly pick up the
        fundamentals, you are definitely in the right place! We love Swift at
        Code Nation, and feel it should be as easily accessible as JavaScript
        is.
      </P>
      <Spacer />
      <H1>How to use this site</H1>
      <P>
        In the menu you'll find topics which will discuss the different aspects
        of Swift. There'll be examples and use cases, and occasional references
        to other programming languages. If you've studied with us, you'll
        already be family with JS, so there may be some comparisons thrown in to
        help you understand the similarities and differences.
      </P>
    </Container>
  )
}

export default Welcome

const Container = styled.div`
  min-height: 150vh;
`

const H1 = styled.h1``

const Title = styled.h1`
  margin-top: 0;
  font-size: 500%;
`
const Spacer = styled.div`
  height: 50px;
`

const P = styled.p`
  font-size: 120%;
`
