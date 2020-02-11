import React from "react";
import "./Title.css";
import * as ReactBootStrap from "react-bootstrap";
import Image from "../../assets/img/image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <ReactBootStrap.Container fluid id="title">
      <ReactBootStrap.Row>
        <div className="col-sm-12">
          <ReactBootStrap.Jumbotron>
            <ReactBootStrap.Container>
              <h2 className="display-3">Ekta Sharma</h2>
              <p className="lead">Full Stack Developer</p>
              <img className="d-block img-fluid my-pic" src={Image} />
              <p className="scrolldown scrollBtn">
                <a className="smoothscroll circle-icon" href="#about">
                  <FontAwesomeIcon
                    icon={faChevronCircleDown}
                    size="3x"
                    className="circle"
                  />
                </a>
              </p>
            </ReactBootStrap.Container>
          </ReactBootStrap.Jumbotron>
          {/* <div className="jumbotron jumbotron-fluid"></div> */}
        </div>
      </ReactBootStrap.Row>
    </ReactBootStrap.Container>
  );
};

export default Title;
