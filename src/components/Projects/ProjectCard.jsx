import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title><br></br>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (

        <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginRight: "10px",marginBottom: "10px" }}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginRight: "10px",marginBottom: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {props.detLink && (
          <Button
          variant="primary"
          href={props.detLink}
          target="_blank"
          style={{ marginRight: "10px",marginBottom: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Details"}
        </Button>
        )}
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
