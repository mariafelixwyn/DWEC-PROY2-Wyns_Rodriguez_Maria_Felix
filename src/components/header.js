import logo from '../whiteicon.png';
import React from "react";
import { Navbar,Container,Nav } from 'react-bootstrap';



export default class Header extends React.Component {
  state = {};
  render() {
    return (
      <header className="App-header">
        <Navbar bg="darker" variant="dark" >
          <Container>
          <Navbar.Brand href="#logo"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#academics">Academics</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#utility">Utility</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </header>
    );
  }
}
