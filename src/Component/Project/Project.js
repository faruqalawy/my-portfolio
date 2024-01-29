import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./Project.css";

export default function Project() {
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
    <Container className="project" id="Project">
      <h1 className="text-center project-head section-title blue-color font-600">
        MY PROJECT
      </h1>
      {windowWidth < 992 ? (
        <Col>
          <Card className="card">
            <Row className="d-flex flex-column">
              <Col>
                <div className="project-image sm" />
              </Col>
              <Col className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="font-600 project-title">
                  Cozy Havens{" "}
                  <span className="project-year">(DECEMBER 2023)</span>
                </h1>
                <p className="text-center project-desc-sm">
                  Cozy Havens website is an online platform that allow users to
                  rent accommodation, offering a user-friendly interface to
                  discover, compare, and reserve accommodations in Yogyakarta.
                </p>
                <p>Stack: React, Scss</p>
                <Row className="btn-container d-flex">
                  <Button
                    variant="outline-primary"
                    className="btn-project"
                    href="https://www.figma.com/file/3VDpuKmf4RKkQ93R6UJigS/Website-CozyHavens?type=design&node-id=0%3A1&mode=design&t=9k7ZTIQRdOVE5ZnN-1"
                  >
                    Design
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="btn-project"
                    href="https://github.com/faruqalawy/Cozy-Havens"
                  >
                    Code
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="btn-project btn-3"
                    href="https://faruqalawy.github.io/Cozy-Havens/"
                  >
                    Live Demo
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card>
          <div style={{ paddingBottom: 80 }} />
        </Col>
      ) : (
        <Col>
          <Card className="card">
            <Row className="d-flex align-items-center">
              <Col className="d-flex flex-column align-items-center">
                <h3 className="font-600 project-title">
                  Cozy Havens{" "}
                  <span className="project-year">(DECEMBER 2023)</span>
                </h3>
                <p className="text-center" style={{ width: 415 }}>
                  Cozy Havens website is an online platform that allow users to
                  rent accommodation, offering a user-friendly interface to
                  discover, compare, and reserve accommodations in Yogyakarta.
                </p>
                <p>Stack: React, Scss</p>
                <Col style={{ marginTop: 8 }}>
                  <Button
                    variant="outline-primary"
                    className="btn-project"
                    style={{ marginRight: 15 }}
                    href="https://www.figma.com/file/3VDpuKmf4RKkQ93R6UJigS/Website-CozyHavens?type=design&node-id=0%3A1&mode=design&t=9k7ZTIQRdOVE5ZnN-1"
                  >
                    Design
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="btn-project"
                    style={{ marginRight: 15 }}
                    href="https://github.com/faruqalawy/Cozy-Havens"
                  >
                    Code
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="btn-project"
                    href="https://faruqalawy.github.io/Cozy-Havens/"
                  >
                    Live Demo
                  </Button>
                </Col>
              </Col>
              <Col>
                <div className="project-image lg" />
              </Col>
            </Row>
          </Card>
          <div style={{ paddingBottom: 80 }} />
        </Col>
      )}
    </Container>
  );
}
