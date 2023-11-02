import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {
  SiCodechef,
  SiLeetcode,
  SiHackerrank,
  SiGeeksforgeeks
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <p>
                <span className="yellow">Email:</span> sahastranshupathak1@gmail.com
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/sahas950"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://twitter.com/sahastrans65642"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/sahastranshu-pathak-0339461a0/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.instagram.com/sahas_anshu_p3/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>My other Coding Platforms</h1>
                <p>
                You can also find and connect me on these <span className="yellow">platforms.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://www.codechef.com/users/sahas1209"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <SiCodechef />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://leetcode.com/Sahas1250/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.hackerrank.com/sahastranshupat1"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <SiHackerrank />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://auth.geeksforgeeks.org/user/sahastranshupathak1"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <SiGeeksforgeeks />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social