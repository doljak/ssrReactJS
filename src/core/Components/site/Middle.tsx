import React from "react";
import { Col, Row } from "react-bootstrap";

import land from "../../../assets/svg/svgexport-1.svg";

export default class Middle extends React.Component<{}, {}> {
  public renderTitle() {
    return [
      <Row>
        <img
          className="land-image"
          src={land}
          alt="betterment app mobile screenshot"
        />
        <Col>texto meio</Col>
      </Row>,
    ];
  }

  public renderBody() {
    return [
      <Row>
        <Col>fig 1</Col>
        <Col>fig 2</Col>
        <Col>fig 3</Col>
      </Row>,
    ];
  }

  public render() {
    return [this.renderTitle(), this.renderBody()];
  }
}
