import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import { TypeAnimation } from "react-type-animation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LinkedinIcon from "../../Assets/Icons/linkedin-home.svg";

import Stack from "../../Parts/Stack/Stack";

import portfolio from "../../Json/portfolio.json";

import "./Home.css";

export default function Content() {
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
    <div className="Home custom-display" id="Home">
      {windowWidth < 1001 ? (
        <>
          <Col className="d-flex flex-column align-items-center">
            <div
              style={{ marginTop: 50 }}
              className="blob"
              role="img" // Atribut role="img" menandakan bahwa elemen ini adalah gambar
              aria-label="Main Home Image" // Atribut aria-label berisi deskripsi alternatif
            ></div>
            <div className="left-side">
              <h2 className="hello-text text-center">Hello, I'm</h2>
              <h1 style={{ fontWeight: 600 }} className="name-text text-center">
                Faruq <span className="blue-color">Alawy</span>
              </h1>
              <h2 className="skill-text text-center">
                <span>A </span>
                <TypeAnimation
                  sequence={[
                    "Front-End Developer",
                    1000,
                    "Web Developer",
                    1000,
                  ]}
                  speed={5}
                  deletionSpeed={5}
                  repeat={Infinity}
                />
              </h2>
              <div
                style={{ margin: 0, marginTop: 25 }}
                className="d-flex flex-row justify-content-center"
              >
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/faruq-alawy-533199217/"
                >
                  <img
                    src={LinkedinIcon}
                    alt="linkedin-icon"
                    style={{ width: 50, height: 50 }}
                    className="icon linkedin-home"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/faruqalawy"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      color: "#000000",
                      height: 50,
                      width: 50,
                      marginLeft: 20,
                    }}
                    className="icon github-home"
                  />
                </a>
              </div>
            </div>
          </Col>

          <Stack data={portfolio.stack} />
        </>
      ) : (
        <>
          <Row className="align-items-center">
            <Col className="left-side">
              {/* <h2 className="hello-text">Hello, I'm</h2> */}
              
              <h1 style={{ fontWeight: 600 }} className="name-text">
              Hello, I'm <span className="blue-color">Faruq Alawy</span>
              </h1>
              <h2 className="skill-text">
                <span>A </span>
                <TypeAnimation
                  sequence={[
                    "Front-End Developer",
                    1000,
                    "Web Developer",
                    1000,
                  ]}
                  speed={5}
                  deletionSpeed={5}
                  repeat={Infinity}
                />
              </h2>
              <div
                style={{ margin: 0, marginTop: 25 }}
                className="d-flex flex-row"
              >
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/faruq-alawy-533199217/"
                >
                  <img
                    src={LinkedinIcon}
                    alt="linkedin-icon"
                    style={{ width: 50, height: 50 }}
                    className="icon linkedin-home"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/faruqalawy"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      color: "#000000",
                      height: 50,
                      width: 50,
                      marginLeft: 20,
                    }}
                    className="icon github-home"
                  />
                </a>
              </div>
            </Col>
            <div
              style={{ marginTop: 50 }}
              className="blob"
              role="img" // Atribut role="img" menandakan bahwa elemen ini adalah gambar
              aria-label="Main Home Image" // Atribut aria-label berisi deskripsi alternatif
            ></div>
          </Row>
        </>
      )}
    </div>
  );
}
