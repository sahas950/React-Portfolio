import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiPycharm,
  SiGithub,
  SiGooglecolab,
  SiJenkins
} from "react-icons/si";
import {
  DiEclipse,
  DiMysql
} from "react-icons/di";
import {
  FaSalesforce
} from "react-icons/fa";
import {
  IoServerSharp
} from "react-icons/io5";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><br></br><p style={{fontSize:"20px"}}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><br></br><p style={{fontSize:"20px"}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse /><br></br><p style={{fontSize:"20px"}}>Eclipse</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm /><br></br><p style={{fontSize:"20px"}}>Pycharm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoServerSharp /><br></br><p style={{fontSize:"20px"}}>WAMP Server</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /><br></br><p style={{fontSize:"20px"}}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql /><br></br><p style={{fontSize:"20px"}}>MySQL Workbench</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins /><br></br><p style={{fontSize:"20px"}}>Jenkins</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSalesforce /><br></br><p style={{fontSize:"20px"}}>Salesforce CRM</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab /><br></br><p style={{fontSize:"20px"}}>Google Colab</p>
      </Col>
    </Row>
    
  );
}

export default Toolstack;