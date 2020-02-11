import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faDribbble,
  faSkype,
  faInstagram,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <MDBContainer fluid>
      <MDBFooter className="font-small pt-4 mt-4 footer">
        <a className="smoothscroll circle-icon" id="go-top" href="#title">
          <FontAwesomeIcon
            icon={faChevronCircleUp}
            size="3x"
            className="circleUp"
          />
        </a>
        {/* </p> */}
        {/* </MDBContainer> */}
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> Ekta Sharma </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </MDBContainer>
  );
};

export default Footer;
