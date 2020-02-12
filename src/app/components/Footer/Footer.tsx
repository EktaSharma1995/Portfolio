import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBContainer, MDBFooter } from "mdbreact";
import * as React from "react";

export const Footer = () => {
  const name = "Ekta Sharma";
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
            &copy; {new Date().getFullYear()} Copyright: <a href="#">{name}</a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </MDBContainer>
  );
};
