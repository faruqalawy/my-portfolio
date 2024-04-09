import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./About.css"

import AboutImage from "../../Parts/AboutImage/AboutImage";
import Stack from "../../Parts/Stack/Stack";

import portfolio from "../../Json/portfolio.json";

export default function About( props ) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container className="About" id="About">
      {windowWidth < 1001 ? (
        <Col>
          <Col className="image-container sm d-flex justify-content-center" style={{ padding: 0, marginBottom: 70 }}>
            <AboutImage />
          </Col>
          <Col style={{ padding: 0}}>
            <h1
              className="blue-color section-title"
              style={{ fontSize: 28, fontWeight: 600 }}
            >
              ABOUT ME
            </h1>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 600,
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              {props.data.bio}
            </h1>
            <p className="description-text">
             {props.data.desc}
            </p>
            <Row className="bio-sm top-bio" style={{ marginTop: 9}}>
              <Col>
                <p className="font-600 title">NAME</p>
                <p>Faruq Alawy</p>
              </Col>
              <Col>
                <p className="font-600 title">STACK</p>
                <p>Html, Css, JS, React, Bootstrap, Sass, Figma, Git</p>
              </Col>
            </Row>
            <Row className="bio-sm">
              <Col>
                <p className="font-600 title">EMAIL</p>
                <p>faruqhudaya@gmail.com</p>
              </Col>
              <Col>
                <p className="font-600 title">EMPLOYEMENT</p>
                <p>Open</p>
              </Col>
            </Row>
          </Col>
        </Col>
      ) : (
        <>
        <Stack data={portfolio.stack} />
        <Row style={{ paddingTop: 45, marginTop: 85 }} id="About">
          <Col style={{ maxWidth: 425, padding: 0, marginBottom: 70 }}>
            <AboutImage />
          </Col>
          <Col style={{ padding: 0, marginLeft: 50 }}>
            <h1
              className="blue-color"
              style={{ fontSize: 28, fontWeight: 600 }}
            >
              ABOUT ME
            </h1>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 600,
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              {props.data.bio}
            </h1>
            <p className="description-text">
              {props.data.desc}
            </p>
            <Row style={{ marginTop: 9, marginBottom: 5 }}>
              <Col>
                <p className="font-600 title">NAME</p>
                <p className="description-text">Faruq Alawy</p>
              </Col>
              <Col>
                <p className="font-600 title">STACK</p>
                <p className="description-text">Html, Css, JS, React, Bootstrap, Sass, Figma, Git</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="font-600 title">EMAIL</p>
                <p className="description-text">faruqhudaya@gmail.com</p>
              </Col>
              <Col>
                <p className="font-600 title">EMPLOYEMENT</p>
                <p className="description-text">Open</p>
              </Col>
            </Row>
          </Col>
        </Row>
        </>
      )}
    </Container>
  );
}
