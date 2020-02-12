import * as React from "react";
import * as ReactBootStrap from "react-bootstrap";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About = () => {
  const title = {
    section1: "About me",
    section2: "Contact Details"
  };

  const contactDetails = {
    name: "Ekta Sharma",
    house: "Toronto",
    provinceCountry: "Ontario, CA",
    phone: "(437)997-0127",
    email: "esharma1995@gmail.com"
  };

  const name = "Ekta Sharma";
  return (
    <ReactBootStrap.Container fluid>
      <section id="about" className="section feature-box mb-5">
        <ReactBootStrap.Row>
          <ReactBootStrap.Col sm lg={1}></ReactBootStrap.Col>
          {/* <div className="col-sm-12 col-lg-3">
            <img className="profile-pic" src={profilepic} alt="" />
          </div> */}
          <ReactBootStrap.Col sm lg={5}>
            <ReactBootStrap.Row>
              <ReactBootStrap.Col sm>
                <h2>{title.section1}</h2>
                <p>
                  I am a programmer by heart. I am always curious to learn about
                  new trends. I have experience in working on front-end and
                  back-end. I love challenges and can work under pressure.
                  Seeking a position to apply my skills as a passionate and
                  technology enthusiastic developer with particular emphasis on
                  Angular, JavaScript, HTML5, CSS3, Java, Spring Boot, PHP,
                  NodeJS, Database, UNIX programming.
                </p>
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>
          </ReactBootStrap.Col>

          {/* <div className="row"> */}
          <ReactBootStrap.Col sm lg={2}></ReactBootStrap.Col>
          <ReactBootStrap.Col sm lg={4} className="contact-details">
            <h2>{title.section2}</h2>
            <p className="address">
              <span>{contactDetails.name}</span>
              <br />
              <span>
                {contactDetails.house}
                <br /> {contactDetails.provinceCountry}
              </span>
              <br />
              <span>{contactDetails.phone}</span>
              <br />
              <span>{contactDetails.email}</span> <br />
              <span>
                <a
                  href="https://github.com/EktaSharma1995"
                  target="_blank"
                  title="Github"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="github-icon"
                  />
                </a>
              </span>
              <span>
                <a
                  href="https://ca.linkedin.com/in/ekta-sharma-a81932ab"
                  target="_blank"
                  title="LinkedIn"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="linkedIn"
                  />
                </a>
              </span>
            </p>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </section>
    </ReactBootStrap.Container>
  );
};
