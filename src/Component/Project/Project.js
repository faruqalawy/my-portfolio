import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

import "./Project.css";

import jsonPortfolio from "../../Json/portfolio.json";

import portoImage1 from "../../Assets/Images/fullpage-cozyhavens.webp";
import portoImage2 from "../../Assets/Images/fullpage-portfolio.webp";
import portoImage3 from "../../Assets/Images/fullpage-lumat.webp";
import portoImage4 from "../../Assets/Images/fullpage-digitronix.png"

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

  // Fungsi untuk menentukan apakah tombol harus ditampilkan
  const isShowed = (url) => {
    return url ? true : false;
  };

  const portoImages = [portoImage1, portoImage2, portoImage3, portoImage4, portoImage3];

  return (
    <div className="project custom-display" id="Project">
      <h1 className="text-center project-head section-title blue-color font-600">
        MY PROJECT
      </h1>
      {jsonPortfolio.project.map((item, index) => (
        <Col key={index} className="mb-4">
          <Card className="card">
            {windowWidth < 992 ? (
              <Row className="d-flex flex-column ">
                <Col className="d-flex ">
                <div className={`project-image sm ${index % 2 === 0 ? "" : "reverse-version"}`}>
                <img src={portoImages[index]} alt={item.name} />
                </div>
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                  <h1 className="font-600 project-title">
                    {item.name}{" "}
                    <span className="project-year">
                      {"("}
                      {item.publish}
                      {")"}
                    </span>
                  </h1>
                  <p className="text-center project-desc-sm">{item.desc}</p>
                  <p>Stack: {item.stack}</p>
                  <Row className="btn-container d-flex">
                    {isShowed(item.designUrl) && (
                      <Button
                        variant="outline-primary"
                        className="btn-project"
                        href={item.designUrl}
                      >
                        Design
                      </Button>
                    )}
                    {isShowed(item.codeUrl) && (
                      <Button
                        variant="outline-primary"
                        className="btn-project"
                        href={item.codeUrl}
                      >
                        Code
                      </Button>
                    )}
                    {isShowed(item.liveUrl) && (
                      <Button
                        variant="outline-primary"
                        className="btn-project btn-3"
                        href={item.liveUrl}
                      >
                        Live Demo
                      </Button>
                    )}
                  </Row>
                </Col>
              </Row>
            ) : (
              <Row className={`d-flex align-items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                <Col className="d-flex flex-column align-items-center">
                  <h3 className="font-600 project-title">
                    {item.name}{" "}
                    <span className="project-year">
                      {"("}
                      {item.publish}
                      {")"}
                    </span>
                  </h3>
                  <p className="text-center" style={{ width: 415 }}>
                    {item.desc}
                  </p>
                  <p>Stack: {item.stack}</p>
                  <Col style={{ marginTop: 8 }}>
                    {isShowed(item.designUrl) && (
                      <Button
                        variant="outline-primary"
                        className="btn-project"
                        style={{ marginRight: 15 }}
                        href={item.designUrl}
                      >
                        Design
                      </Button>
                    )}
                    {isShowed(item.codeUrl) && (
                      <Button
                        variant="outline-primary"
                        className="btn-project"
                        style={{ marginRight: 15 }}
                        href={item.codeUrl}
                      >
                        Code
                      </Button>
                    )}
                    {isShowed(item.liveUrl) && (
                      <Button
                        variant="outline-primary"
                        className="btn-project"
                        href={item.liveUrl}
                      >
                        Live Demo
                      </Button>
                    )}
                  </Col>
                </Col>
                <Col>
                <div className={`project-image lg ${index % 2 === 0 ? "" : "reverse-version"}`}>
                <img src={portoImages[index]} alt={item.name} />
                </div>

                </Col>
              </Row>
            )}
          </Card>
        </Col>
      ))}
    </div>
  );
}
