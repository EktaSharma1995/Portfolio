import {
  faAngular,
  faApple,
  faBootstrap,
  faCss3,
  faGit,
  faHtml5,
  faJava,
  faJs,
  faLaravel,
  faLinux,
  faNodeJs,
  faNpm,
  faPhp,
  faReact,
  faSass,
  faWindows
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import * as ReactBootStrap from "react-bootstrap";

import { faCheck, faDatabase } from "@fortawesome/free-solid-svg-icons";

export const Work = () => {
  const title = {
    section1: "Education",
    section2: "Work",
    section3: "Skills"
  };

  const institute = {
    first: {
      name: "Humber College, North Campus, Canada",
      course: "Postgraduate Diploma in Information Technology Solutions",
      endDate: "April 2019"
    },

    second: {
      name: "Amity University, Noida, India",
      course: "B.Tech in Computer Science Enginnering",
      endDate: "June 2017"
    }
  };

  const company = {
    first: {
      name: "Checkpoint Research Inc., Toronto, Canada",
      position: "Full Stack Developer ",
      date: "January 2019 - Present"
    },

    second: {
      name: "Paymentus Corporation, Charlotte, NC",
      position: "Software Intern ",
      date: "May 2016 - July 2016"
    }
  };

  const toolsHeading = "Programming Languages & Tools";
  const workflow = "workflow";

  return (
    <ReactBootStrap.Container fluid>
      <section id="resume">
        {/* Education */}
        <ReactBootStrap.Row className="education">
          <ReactBootStrap.Col sm lg={3} className="columns header-col">
            <h1>
              <span>{title.section1}</span>
            </h1>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm lg={8} className="columns main-col">
            <div className="row item">
              <div className="col-sm-12 col-lg-12 columns">
                <h3>{institute.first.name}</h3>
                <p className="info">
                  {institute.first.course} <span>&bull;</span>
                  <em className="date">{institute.first.endDate}</em>
                </p>

                <p className="description">
                  Operating System, Java Programming, Web programming and
                  Design, Introduction to Database and SQL, Requirement Analysis
                  and Process Modelling, Database Programming Using Java, XML
                  and Java Script, Advanced Operating Systems, Oracle DB using
                  PL/SQL, Oracle SQL Tuning, Data Structure and Design Patterns,
                  Career Connections, Project Management, Oracle Data Warehouse
                  Fund, Big Data, Web Application Development Using PHP, J2EE
                  Web Components, Ios App Development 1, Employee Engagemnet,
                  Capstone Project, Oracle DW Implementations, Mean Stack
                  Development, J2EE Business Components, Ios Application
                  Development 2
                </p>
              </div>
            </div>
            {/* item end  */}
            <ReactBootStrap.Row className="item">
              <ReactBootStrap.Col sm lg={12} className="columns">
                <h3>{institute.second.name}</h3>
                <p className="info">
                  {institute.second.course}
                  <span>&bull;</span>{" "}
                  <em className="date">{institute.second.endDate}</em>
                </p>

                <p className="description">
                  C, Object Oriented Programming using C++, Cyber & Information
                  Security, Mathematics, Operating System, Computer Graphics,
                  Theory of Computation, Data Structure Using C, Java
                  Programming, Computer Organization & Architecture, Compiler
                  Construction, Software Engineering, Data Communication &
                  Computer Networks, Analysis & Design Of Algorithms,
                  Fundamentals of Mobile Computing, Distributed Systems,
                  Advanced Java Programming, Artificial Intelligence, Software
                  Testing & Quality Assurance, Open Source Application
                  Development Technologies, Information Storage Management,
                  Industry Internship
                </p>
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>
            {/* another item end */}
          </ReactBootStrap.Col>
          {/* main col end */}
        </ReactBootStrap.Row>
        {/* end education section */}
        {/* Work */}
        <ReactBootStrap.Row className="work" id="work">
          <ReactBootStrap.Col sm lg={3} className="columns header-col">
            <h1>
              <span>{title.section2}</span>
            </h1>
          </ReactBootStrap.Col>
          <div className="col-sm-12 col-lg-8 columns main-col">
            <div className="row item">
              <div className="col-sm-12 col-lg-12 columns">
                <h3>{company.first.name}</h3>
                <p className="info">
                  {" "}
                  {company.first.position}
                  <span>&bull;</span>
                  <em className="date">{company.first.date}</em>
                </p>
                <p>
                  Link to the application:{" "}
                  <a href="https://apps.checkpointresearch.ca/">Checkpoint</a>
                  {"  "}(Please Contact for more Information)
                </p>
                <ul className="description">
                  <li className="points">
                    Worked on centralized database of sales lead data using MEAN
                    stack with angular 7 that allows administrators to perform
                    CRUD operation on the users and leads data
                  </li>
                  <li className="points">
                    Added new Express-NodeJS based APIs for Angular based web
                    interface, wrote excel import and export utility
                  </li>
                  <li className="points">
                    Created migration script in NodeJS that migrated relational
                    data from Postgres to MongoDB
                  </li>
                  <li className="points">
                    Updating algorithm written in Java that scrapes new sales
                    leads from Google, LinkedIn, Yellow Pages, and variety of
                    other sources
                  </li>
                  <li className="points">
                    Migration of console application written in Java into Spring
                    Boot framework
                  </li>
                  <li className="points">
                    Updating user authentication, authorization rules
                  </li>
                  <li className="points">
                    Participated in Requirement gathering and analysis by
                    directly interacting with client/vendor team in order to
                    fully understand their needs and expectations
                  </li>
                  <li className="points">
                    Participated in code review sessions to improve and optimize
                    the code
                  </li>
                  <li className="points">
                    Writing unit test cases using Junit and Jest
                  </li>
                  <li className="points">
                    Styling and HTML changes to support full responsiveness of
                    the application on mobile and desktop browser
                  </li>
                  <li className="points">
                    Wrote a utility that would SFTP into customer’s server and
                    clean the server space
                  </li>
                  <li className="points">
                    Wrote a utility that would SFTP into customer’s server and
                    clean the server space
                  </li>
                  <li className="points">
                    Provided maintenance and support to the applications running
                    in production
                  </li>
                  <li className="points">
                    Troubleshooting customer support cases by analyzing data and
                    application logs
                  </li>
                </ul>
              </div>
            </div>
            {/* Item 1 */}
            <div className="row item">
              <div className="col-sm-12 col-lg-12 columns">
                <h3>{company.second.name}</h3>
                <p className="info">
                  {company.second.position}
                  <span>&bull;</span>
                  <em className="date">{company.second.date}</em>
                </p>
                <ul className="description">
                  <li className="points">
                    Worked on a in house chat bot that was developed for
                    internal employees to find answers to frequently asked
                    questions and contents. It was further enhanced to assist
                    customer care to check the status of customer payments,
                    whether it went through
                  </li>
                  <li className="points">
                    Built prototype of the bot using Skype Bot framework and
                    NodeJS
                  </li>
                  <li className="points">
                    Participated in requirement gathering sessions with the
                    stakeholders
                  </li>
                  <li className="points">
                    Documented the requirements, designs, and data models
                  </li>
                  <li className="points">
                    Fed variety of vocabulary keywords into the database and
                    built predictive intelligence around the data
                  </li>
                  <li className="points">
                    Assisted the internal users and customer care support in
                    using and accessing the Bot
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ReactBootStrap.Row>
        {/* End of work */}
        <div className="row skill" id="skills">
          <div className="col-sm-12 col-lg-3 columns header-col">
            <h1>
              <span>{title.section3}</span>
            </h1>
          </div>
          <div className="col-sm-12 col-lg-8 columns main-col">
            <p className="description">
              I have Worked on modern JavaScript framework (Angular, NodeJS,
              Express) and Java/Spring Boot. Developed an intermediate knowledge
              of relational database concepts and how to interact with databases
              using SQL and PL/SQL. Well versed with entire SDLC life cycle,
              Agile, and Scrum methodology.
            </p>

            <div className="type mb-3">{toolsHeading}</div>
            <div className="skills-icons">
              <ul className="list-inline dev-icons">
                <li className="list-inline-item titleCSS">
                  {/* <a className="icons" href="#" target="_blank" title="CSS3"> */}
                  <FontAwesomeIcon icon={faCss3} size="lg" />
                  {/* </a> */}
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faNpm} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faJs} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faAngular} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faReact} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faSass} size="lg" />
                </li>
                <br />

                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faBootstrap} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faHtml5} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faNodeJs} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faPhp} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faDatabase} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faJava} size="lg" />
                </li>
                <br />
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faLinux} size="lg" title="Linux" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faWindows} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faApple} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faLaravel} size="lg" />
                </li>
                <li className="list-inline-item">
                  <FontAwesomeIcon icon={faGit} size="lg" />
                </li>
              </ul>
            </div>
            <div className="type mb-3">{workflow}</div>
            <div className="workflow">
              <ul className="fa-ul mb-0 check">
                <li className="w-value">
                  <span className="fa-li">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="sm"
                      color="black"
                    ></FontAwesomeIcon>
                  </span>
                  Responsive Design
                </li>
                <li className="w-value">
                  <span className="fa-li">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="sm"
                      color="black"
                    ></FontAwesomeIcon>
                  </span>
                  Cross Browser Debugging and Testing
                </li>
                <li className="w-value">
                  <span className="fa-li">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="sm"
                      color="black"
                    ></FontAwesomeIcon>
                  </span>
                  Cross Functional Teams
                </li>
                <li className="w-value">
                  <span className="fa-li">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="sm"
                      color="black"
                    ></FontAwesomeIcon>
                  </span>
                  Agile Development & Scrum
                </li>
              </ul>
            </div>
            {/* <!-- end skill-bars --> */}
          </div>
        </div>
      </section>
    </ReactBootStrap.Container>
  );
};
