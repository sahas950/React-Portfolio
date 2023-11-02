import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiJava,
  DiAngularSimple,
  DiNodejs,
  DiCss3,
  DiPhp,
  DiCode,
  DiCodeBadge
} from "react-icons/di";

import {
  SiSpringboot,
  SiHtml5,
  SiMysql,
  SiJavascript,
  SiSpring,
  SiPython,
  SiExpress
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><br></br><p style={{fontSize:"20px"}}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring /><br></br><p style={{fontSize:"20px"}}>Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple /><br></br><p style={{fontSize:"20px"}}>Angular.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><br></br><p style={{fontSize:"20px"}}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress /><br></br><p style={{fontSize:"20px"}}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><br></br><p style={{fontSize:"20px"}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /><br></br><p style={{fontSize:"20px"}}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /><br></br><p style={{fontSize:"20px"}}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp /><br></br><p style={{fontSize:"20px"}}>PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /><br></br><p style={{fontSize:"20px"}}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript /><br></br><p style={{fontSize:"20px"}}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython /><br></br><p style={{fontSize:"20px"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode /><br></br><p style={{fontSize:"20px"}}>C</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodeBadge /><br></br><p style={{fontSize:"20px"}}>C++</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;