import React from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";

import "../../styles/site/head-menu.scss";
import logo from "../../../assets/svg/better_logo.svg";

export default class HeadMenu extends React.Component<{}, {}> {
  public renderLogo() {
    return (
      <Col key={0}>
        <img className="logo" src={logo} alt="logo Betterment"></img>
      </Col>
    );
  }

  public renderDropDown() {
    return (
      <Col key={1}>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary">
            Investing
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Action 4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    );
  }
  public renderBtn() {
    return (
      <Col key={2}>
        <Button variant="light">Todo App</Button>
      </Col>
    );
  }
  public renderLogin() {
    return (
      <Col md={{ span: 4, offset: 4 }}>
        <Button variant="transparent">Login</Button>
        <Button variant="primary">Get Started</Button>
      </Col>
    );
  }
  public render() {
    return [
      <div className="header-container">
        <Container>
          <Row>
            {this.renderLogo()}
            {this.renderDropDown()}
            {this.renderBtn()}
            {this.renderLogin()}
          </Row>
        </Container>
      </div>,
    ];
  }
}
