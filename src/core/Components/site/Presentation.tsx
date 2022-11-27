import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../../styles/site/presentation.scss";
import nyt from "../../../assets/the-new-york-times-gray.png";
import cbnc from "../../../assets/cnbc-gray.png";
import bussiness from "../../../assets/business-insider-gray.png";
import forbes from "../../../assets/forbes-gray.png";
import { Link } from "../../interface/link";

export default class Presentation extends React.Component<{}, {}> {
  public logos: Link[] = [
    {
      link: "https://www.nytimes.com/2020/10/30/your-money/election-investments.html",
      src: nyt,
      alt: "The New York Times",
    },
    {
      link: "https://www.cnbc.com/2020/02/13/why-betterment-is-the-best-roboadvisor-for-beginning-investors.html",
      src: cbnc,
      alt: "CNBC",
    },
    {
      link: "https://www.businessinsider.com/betterment-bolsters-sustainable-investing-offerings-2020-10",
      src: bussiness,
      alt: "Bussiness",
    },
    {
      link: "https://www.forbes.com/sites/donnafuscaldo/2019/03/14/betterment-is-coming-for-the-checking-account/#2845accb1bb6",
      src: forbes,
      alt: "Fobes",
    },
  ];
  public renderText() {
    return [
      <Col>
        <h1 className="item-title">
          Investing
          <br />
          made better
        </h1>
        <div className="item-body">
          <p>
            Meet the app that gives you the tools, inspiration, and support to
            help you become a better investor.
          </p>
        </div>
      </Col>,
    ];
  }
  public renderLogos() {
    return [
      <Container fluid>
        <div className="journals-logo-container">
          {this.logos.map((logo) => {
            return (
              <a href={logo.link} target="_blank">
                <img className="journals" src={logo.src} alt={logo.alt} />
              </a>
            );
          })}
        </div>
      </Container>,
    ];
  }
  public render() {
    return [
      <div className="presentation-container">
        <Container>
          <Row>
            <Col>
              {this.renderText()}
              {this.renderLogos()}
            </Col>
            <Col>
              <img
                src="https://www.betterment.com/hubfs/Graphics/webpage-graphics/homepage-hero-image-device_mobile.png"
                alt="betterment app mobile screenshot"
              />
            </Col>
          </Row>
        </Container>
      </div>,
    ];
  }
}
