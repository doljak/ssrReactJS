import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../../styles/site/middle.scss";
import land from "../../../assets/svg/svgexport-1.svg";
import nyt from "../../../assets/the-new-york-times.png";
import cbnc from "../../../assets/cnbc.png";
import bussiness from "../../../assets/business-insider.png";
import forbes from "../../../assets/forbes.png";
import clock from "../../../assets/clock.png";
import engine from "../../../assets/engine.png";
import compass from "../../../assets/compass.png";

import { Link } from "../../interface/link";
export default class Middle extends React.Component<{}, {}> {
  public imgsDes: Link[] = [
    {
      src: clock,
      title: "Easy",
      alt: "Get started with as little as $10 and use our top-rated mobile app to invest on the go.",
    },
    {
      src: engine,
      title: "Optimized",
      alt: "We put the robots to work for you, with automated tools and strategies that can help unlock your money’s potential.",
    },
    {
      src: compass,
      title: "Personalized",
      alt: "Customize your account, either as hands on as you want, or with our guidance along the way.",
    },
  ];
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
  public renderTop() {
    return [
      <Row>
        <img
          className="land-image"
          src={land}
          alt="betterment app mobile screenshot"
        />
        <Col>{this.renderLogos()}</Col>
      </Row>,
    ];
  }
  public renderText() {
    return [
      <Col>
        <h2>
          Investing built for
          <br />a better future.
        </h2>
        <p>
          Whether you're starting with $10 or $10M,
          <br />
          we’re built to help you reach your financial goals.
        </p>
      </Col>,
    ];
  }
  public renderFigures() {
    return [
      <div className="assets-imgs-dest">
        {this.imgsDes.map((img) => {
          return (
            <div>
              <img className="assets-img-dest" width="100%" src={img.src} />
              <h3>{img.title}</h3>
              <p>{img.alt}</p>
            </div>
          );
        })}
      </div>,
    ];
  }

  public render() {
    return (
      <div className="middle-container">
        {this.renderTop()}
        {this.renderText()}
        {this.renderFigures()}
      </div>
    );
  }
}
