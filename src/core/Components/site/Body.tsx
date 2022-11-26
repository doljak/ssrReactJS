import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Presentation from "./Presentation";
import Middle from "./Middle";
import Footer from "./Footer";

export default class Body extends React.Component<{}, {}> {
  public render() {
    return [
      <Container>
        <Presentation />
        {/* <Middle />
        <Row>
          <Col>Vantagens</Col>
        </Row>
        <Row>
          <Col>Vantagem 1</Col>
          <Col>Vantagem 2</Col>
          <Col>Vantagem 3</Col>
        </Row>

        <Row>
          <Col>Vantagem 4</Col>
          <Col>Vantagem 5</Col>
          <Col>Vantagem 6</Col>
        </Row>

        <Row>
          <Col>Rodapé 1</Col>
          <Col>Rodapé 2</Col>
          <Col>Rodapé 3</Col>
        </Row>

        <Footer /> */}
      </Container>,
    ];
  }
}
