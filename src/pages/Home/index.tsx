import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./Home.scss";

class Home extends React.Component<{}, {}> {
  public render() {
    return [
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>,
    ];
  }
}

export default Home;
