import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import ach1 from '../assets/certificates/ach1.png'
import ach2 from '../assets/certificates/ach2.png'
import agoda from '../assets/certificates/agoda.png'
import ankur from '../assets/certificates/ankur.jpeg'
import boot1 from '../assets/certificates/boot1.png'
import boot2 from '../assets/certificates/boot2.png'
import comp from '../assets/certificates/comp.png'
import enigma from '../assets/certificates/enigma.png'
import excel from '../assets/certificates/excel.png'
import hack from '../assets/certificates/hack.png'
import Hackerrank from '../assets/certificates/Hackerrank.png'
import jobathon from '../assets/certificates/jobathon.png'
import live from '../assets/certificates/live.png'
import neo from '../assets/certificates/neo.png'
import python from '../assets/certificates/python.png'
import tech from '../assets/certificates/tech.png'
import virtusa from '../assets/certificates/virtusa.png'
import webd from '../assets/certificates/webd.png'
import mern from '../assets/certificates/mern.jpg'
import ml from '../assets/certificates/ml.png'
import snack from '../assets/certificates/snack.png'
import data from '../assets/certificates/data.png'
import netcamp from '../assets/certificates/netcamp.png'


import { Container } from "react-bootstrap";

const Certificates = () => {
  return (
    <Container fluid className="about-section">
            <Carousel style={{height:"600px"}}>
      <Carousel.Item>
      <img
        src={boot1}
        class="d-block w-100 "
        alt="Sunset Over the City"
        height="600"
      />        
      {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
        src={Hackerrank}
        class="d-block w-100"
        alt="Canyon at Nigh"
        height="600"
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
        src={webd}
        class="d-block w-100"
        alt="Cliff Above a Stormy Sea"
        height="600"
      />
      </Carousel.Item>
    </Carousel>
<br></br><br></br>

      <div className="container cert" >
      <h1 className="project-heading">
      <br></br>
          <strong className="yellow">Internship and</strong> Live project
        </h1><br></br>
        <div class="row">
          <div class="col-lg-4" style={{paddingBottom:"20px"}}>
            <div className="card cert-view">
              <img
                src={live}
                class="card-img-top"
                alt="Waterfall"
              />
                <h5 class="card-title2">Live Certificate</h5>
            </div>
          </div>

          <div class="col-lg-4  d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={ankur}
                class="card-img-top"
                alt=""
              />
                <h5 class="card-title2">Web Developer Intern</h5>
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={virtusa}
                class="card-img-top"
                alt="Virtusa Internship"
              />
                <h5 class="card-title2">Intern-Delivery</h5>
            </div>
          </div>
        </div>
     <br></br>
     <h1 className="project-heading">
     <br></br>
          <strong className="yellow">Courses </strong> Certificates
        </h1><br></br>

        <div class="row">
          <div class="col-lg-4 " style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={mern}
                class="card-img-top"
                alt="MERN Stack"
              />
                <h5 class="card-title2">MERN Stack</h5>
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={webd}
                class="card-img-top"
                alt="Web Development"
              />
                <h5 class="card-title2">Web Development</h5>
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={comp}
                class="card-img-top"
                alt="Competitve Coding"
              />
                <h5 class="card-title2">Competitive Coding</h5>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 " style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={excel}
                class="card-img-top"
                alt="Excel Automation"
              />
                <h5 class="card-title2">Excel Automation</h5>
            </div>
          </div>
          
          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={python}
                class="card-img-top"
                alt="Python"
              />
                <h5 class="card-title2">Python</h5>
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={ml}
                class="card-img-top"
                alt="Machine Learning"
              />
                <h5 class="card-title2">Machine Learning</h5>
            </div>
          </div>
        </div>
        <div class="row">
          <center>
          <div class="col-lg-4 " style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={data}
                class="card-img-top"
                alt="Excel Automation"
              />
                <h5 class="card-title2">Data Analysis</h5>
            </div>
          </div>
          </center>
        </div>
     
        <br></br>
        <h1 className="project-heading">
        <br></br>
          <strong className="yellow">Bootcamps and </strong> Hackathons
        </h1><br></br>
        <div class="row">
          <div class="col-lg-4 " style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={boot1}
                class="card-img-top"
                alt="Javascript and React JS"
              />
                <h5 class="card-title2">JavaScript and React JS</h5>
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={boot2}
                class="card-img-top"
                alt="Python and Machine Learning"
              />
                <h5 class="card-title2">Python and Machine Learning</h5>
                
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={hack}
                class="card-img-top"
                alt="Virtusa Neural Hack"
              />
                <h5 class="card-title2">Virtusa Neural Hack</h5>
            </div>
          </div>
        </div>
        <div class="row">
          <center>
          <div class="col-lg-4 " style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={netcamp}
                class="card-img-top"
                alt="Excel Automation"
              />
                <h5 class="card-title2">Network Management</h5>
            </div>
          </div>
          </center>
        </div>


        <br></br>
        <h1 className="project-heading">
        <br></br>
        <strong className="yellow">Co-Curricular and Other </strong> Participations
        </h1><br></br>
        <div class="row">
          <div class="col-lg-4 " style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={ach1}
                class="card-img-top"
                alt="The Web-Dev Battle"
              />
                <h5 class="card-title2">The Web-Dev Battle</h5>
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={ach2}
                class="card-img-top"
                alt="Aadishree Foundation"
              />
                <h5 class="card-title2">Aadishree Foundation</h5>
                
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={Hackerrank}
                class="card-img-top"
                alt="Problem Solving"
              />
                <h5 class="card-title2">Problem Solving</h5>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 " style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={tech}
                class="card-img-top"
                alt="Technophile 2k19"
              />
                <h5 class="card-title2">Technophile 2k19</h5>
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={agoda}
                class="card-img-top"
                alt="CodeAgoda"
              />
                <h5 class="card-title2">CodeAgoda</h5>
                
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={jobathon}
                class="card-img-top"
                alt="Job-A-Thon"
              />
                <h5 class="card-title2">JOB-A-THON 12.0</h5>
            </div>
          </div>
        </div>
        <div class="row">
          

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={enigma}
                class="card-img-top"
                alt="Enigma"
              />
                <h5 class="card-title2">Enigma 2k19</h5>
                
            </div>
          </div>

          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={neo}
                class="card-img-top"
                alt="NEO"
              />
                <h5 class="card-title2">National Engineering Olympiad 3.0</h5>
            </div>
          </div>
          <div class="col-lg-4 d-lg-block" style={{paddingBottom:"20px"}}>
          <div className="card cert-view">
              <img
                src={snack}
                class="card-img-top"
                alt="Snackdown"
              />
                <h5 class="card-title2">Snackdown</h5>
            </div>
          </div>
        </div>
      </div>
  

    </Container>
  )
}

export default Certificates