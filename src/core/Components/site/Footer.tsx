import React from "react";
import { Col, Row } from "react-bootstrap";

export default class Footer extends React.Component<{}, {}> {
  public render() {
    return [
      <Row>
        <Col>texto Rodapé</Col>
      </Row>,
    ];
  }
}
