import React from 'react';
import { Container, Col } from 'react-bootstrap';

import LinkedinIcon from "../../Assets/Icons/linkedin-footer.svg";
import GithubIcon from "../../Assets/Icons/github-footer.svg";

import "./Footer.css"

export default function Footer() {
  return (
    <Container className='footer'>
        <Col className='pt-5 pb-5'>
            <Col className='d-flex justify-content-center mb-4'>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/faruq-alawy-533199217/"
            >
              <img
                src={LinkedinIcon}
                alt="linkedin icon"
                className="icon"
                style={{ height: 30, width: 30, padding: 0 }}
              ></img>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/faruqalawy"
            >
              <img
                src={GithubIcon}
                alt="github icon"
                className="icon"
                style={{ height: 30, width: 30, padding: 0, marginLeft: 20 }}
              />
            </a>
            </Col>
            <h1 className='text-footer text-center'>Copyright <span style={{fontSize: 18}}>©</span> 2024 <span className='font-600'>Faruq Alawy. </span>All rights reserved</h1>
        </Col>
    </Container>
  )
}
