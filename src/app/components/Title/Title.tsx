import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import * as ReactBootStrap from "react-bootstrap";
const Image = require("../../../assets/img/image.jpg");

export const Title = () => {
  return (
    <ReactBootStrap.Container fluid id="title">
      <ReactBootStrap.Row>
        <div className="col-sm-12">
          <ReactBootStrap.Jumbotron>
            <ReactBootStrap.Container>
              <h2 className="display-3">Ekta Sharma</h2>
              <p className="lead">Full Stack Developer</p>
              <img className="d-block img-fluid my-pic" src={Image.default} />
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
