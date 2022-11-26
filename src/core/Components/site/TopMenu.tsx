import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "../../interface/link";

import "../../styles/site/top-menu.scss";

interface IProps {
  buttons: Link[];
}
interface IState {}

export default class TopMenu extends React.Component<IProps, IState> {
  public renderLinks(links: Link[]) {
    const linksBtns = links.map((button, index) => {
      return (
        <a key={index} className={button.class} href={button.link}>
          {button.label}
        </a>
      );
    });
    return linksBtns;
  }

  public render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>{this.renderLinks(this.props.buttons)}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
