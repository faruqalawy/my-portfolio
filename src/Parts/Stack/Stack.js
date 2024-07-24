import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Stack.css";

import { CloudinaryContext, Image } from "cloudinary-react";

export default function Stack(props) {
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
    <CloudinaryContext cloudName="dnwvsqlh1">
      <Container className="Stack">
        {windowWidth < 1001 ? (
          <Col className="d-flex flex-column align-items-center content">
            <h2 className="tech-text sm">Tech Stack</h2>
            <Row className="d-flex justify-content-center icon-sm">
              {props.data.map((item) => {
                return (
                  <Image
                    key={item.key}
                    publicId={item.imageUrl}
                    alt={item.name}
                    className={item.class}
                  />
                );
              })}
            </Row>
          </Col>
        ) : (
          <Row className="align-items-center stack">
            <Col className="d-flex flex-row align-items-center content">
              <h2 className="tech-text lg">Tech Stack</h2>
              <div className="d-flex flex-colum icon-lg">
                {props.data.map((item) => {
                  return (
                    <span title={item.name} key={item.key}>
                      <div className="icon">
                        <Image
                          publicId={item.imageUrl}
                          alt={item.name}
                          className={item.class}
                        />
                      </div>
                    </span>
                  );
                })}
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </CloudinaryContext>
  );
}
