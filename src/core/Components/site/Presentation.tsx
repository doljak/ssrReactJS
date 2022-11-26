import React from "react";
import { Col, Row } from "react-bootstrap";

export default class Presentation extends React.Component<{}, {}> {
  public render() {
    return [
      <Row>
        <Col>texto apresentacao</Col>
        <Col>celular</Col>
      </Row>,
    ];
  }
}
