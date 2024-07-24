import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Image } from "react-bootstrap";

import UpIcon from "../../Assets/Icons/up-icon.svg";

import "./Contact.css";

import emailjs from "@emailjs/browser";

export default function Contact() {
  {
    /* function for adjust code structure according display width */
  }
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

  {
    /* function to connect contact form with google spreadsheet */
  }
const formRef = useRef(null); {/* this ref used by this function and emailjs function below */ }
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbytQMhyL3cTHLwlBNQU6Pp3vo2X9VBtXbp4oVG8jjTLSCJP00GFWRCqVpeFU2X3Wn5GjQ/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: new FormData(formRef.current),
      });

      if (response.ok) {
        console.log("SUCCESSFULLY SUBMITTED TO SPREADSHEET");
        const myAlert = document.querySelector(".my-alert");
        if (myAlert) {
          myAlert.classList.toggle("d-none");
        }
        formRef.current.reset();
      } else {
        console.error("Submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setLoading(false);
    }
  }

  {/* this function using the same ref with spreadsheet function above (using formRef) */ }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dx5j8s6', 'template_z9zc6qc', formRef.current, 'topgSIScZYfs1kRkL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact custom-display" id="Contact">
      <h1 className="text-center contact-head section-title blue-color font-600">
        GET IN TOUCH
      </h1>
      <Row style={{ marginBottom: 100 }}>
        <Col className="map-container">
          {windowWidth < 550 ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.970855562686!2d110.3336447666416!3d-7.8032484574238925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1706010035771!5m2!1sid!2sid"
              width={350}
              height={280}
              style={{ border: 0 }}
              allowfullsscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="yogyakarta-city-region-map"
            ></iframe>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.98371952572!2d110.33364480801934!3d-7.803163418595417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1705386273611!5m2!1sid!2sid"
              width={525}
              height={450}
              style={{ border: 0 }}
              allowfullsscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="yogyakarta-city-region-map"
            ></iframe>
          )}
        </Col>
        <Col>
          <h1 className="contact-me font-600">Contact Me</h1>

          <div
            className="alert alert-success alert-dismissible fade show d-none my-alert"
            role="alert"
          >
            Your message has been sent
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <form
            ref={formRef}
            onSubmit={(e) => {
              handleSubmit(e);
              sendEmail(e);
            }}
            className="form"
          >
            <div
              className={
                windowWidth > 500 ? "d-flex flex-row form-group" : "form-group"
              }
              style={{ marginBottom: 15, marginTop: 12 }}
            >
              <div
                style={{
                  marginRight: windowWidth > 500 ? 15 : 0,
                  marginBottom: windowWidth > 500 ? 0 : 15,
                }}
                className="flex-grow-1"
              >
                <label htmlFor="Name"></label>
                <input
                  type="text"
                  id="Name"
                  name="user_name"
                  placeholder="Your Name *"
                  className="input-box"
                  autoComplete="true"
                />
              </div>
              <div className="flex-grow-1">
                <label htmlFor="Email"></label>
                <input
                  type="email"
                  id="Email"
                  name="user_email"
                  placeholder="Your Email *"
                  className="input-box"
                  autoComplete="true"
                />
              </div>
            </div>
            <div>
              <label htmlFor="Message"></label>
              <textarea
                type="text"
                id="Message"
                name="message"
                placeholder="Your Message Here *"
                className="textarea-box"
              />
            </div>
            <div>
              {loading ? (
                <button
                  className="btn btn-primary btn-contact font-600"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Loading...</span>
                </button>
              ) : (
                  <input
                    type="submit"
                    className="btn-contact font-600"
                    value="SEND MESSAGE"
                  />
              )}
            </div>
          </form>
        </Col>
      </Row>

      <a href="#Home">
        <Image className="up-icon" src={UpIcon} alt="up-to-home-icon"></Image>
      </a>
    </div>
  );
}
