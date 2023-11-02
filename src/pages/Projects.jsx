import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import blog from "../assets/projects/blog.jpg";
import expense from "../assets/projects/expense.jpg";
import library from "../assets/projects/library.jpg";
import note from "../assets/projects/note.jpg";
import product from "../assets/projects/product-review.jpg";
import result from "../assets/projects/result-management.jpg";
import stopwatch from "../assets/projects/stopwatch.jpg";
import shop from "../assets/projects/shop-today.jpg";
import quiz from "../assets/projects/quiz.jpg";
import game from "../assets/projects/2048.jpg";
import store from "../assets/projects/store.jpg";








const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong></h1>
          <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
          <h1 className="project-heading"><br></br>
          <strong className="yellow">Major </strong> Projects
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="Inventory Store and Management"
              detLink="https://docs.google.com/presentation/d/1Q6pkMsJvkh4abhqmvlUzJw5Ed3THfkNH/edit?usp=sharing&ouid=113714659953565354449&rtpof=true&sd=true"
              demoLink="https://ugistore.in/"
              description="UGI Inventory project aims to create a dynamic web app for efficient inventory management. Users (General, Storekeeper, Admin) have distinct access levels. General users can request items, check availability, and view reports. Storekeepers can approve requests, issue items, add to inventory, and track item lifecycles. Admins oversee the process, validate user actions, and access reports. The web app uses HTML, CSS, Bootstrap, AJAX, PHP, SQL, and robust security measures including SSL, folder security, and password encryption."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shop Today"
              detLink="https://docs.google.com/presentation/d/1bDYk3jM--D4jSm0EYlykyE5HPeOJZUsz/edit?usp=sharing&ouid=113714659953565354449&rtpof=true&sd=true"
              description="Shop Today is a dynamic ecommerce website with three core shopping tools: E-Cart, Domain Of Brands, and Expense Manager. This innovative project combines essential shopping features with expense management, offering users the convenience of buying and selling products within categorized sections while also providing website design frameworks for purchase."
              ghLink="https://drive.google.com/drive/folders/1TxzmG9HxrKIIVE9z8RYjEYtNUmvy4SXx?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Manager"
              detLink="https://docs.google.com/presentation/d/1q4NKaucqQqzrX7jdZt1qrlVCIurOw-tX/edit?usp=sharing&ouid=113714659953565354449&rtpof=true&sd=true"
              description="Expense Manager is a responsive full-stack website for efficient expense management. It supports multiple budgets, created using HTML, CSS, Bootstrap, PHP, and MySQL, offering a user-friendly experience. Whether tracking daily expenses, monthly budgets, or financial goals, it helps users make informed decisions."
              ghLink="https://github.com/sahas950/Expense_Manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={product}
              isBlog={false}
              title="Product-Review"
              detLink="https://docs.google.com/presentation/d/1z42LiqakzgUoFNumVsjkL8N9cYJjxuN4/edit?usp=sharing&ouid=113714659953565354449&rtpof=true&sd=true"
              description="This project involves the development of two applications: a REST API for user authentication, registration, product search, reviews, and more, and a responsive Angular application for user interaction. Users can register, log in, search for products, request and post reviews, with an optional admin role for review approval. The project emphasizes adherence to coding conventions, security, and a user-friendly design."
              ghLink="https://github.com/sahas950/Product-Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={result}
              isBlog={false}
              title="Result Management"
              detLink="https://docs.google.com/presentation/d/1Gp6IO9D416W3J3egYNlmBZ6XnOvYaORQ/edit?usp=drive_link&ouid=113714659953565354449&rtpof=true&sd=true"
              description="The application is a web-based project developed using HTML/CSS, MySQL and Node.js. It serves two types of users: students and teachers, accessible through buttons on the homepage. Students can input their roll number and date of birth to view their results, with error handling for mismatched information. For teachers, the application provides comprehensive functionality, including viewing all records, adding new records, and editing or deleting existing ones. "
              ghLink="https://github.com/sahas950/Result-Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Note Saver"
              detLink="https://docs.google.com/presentation/d/1oXEbGepgmbQdOMVSB-Sx-daXIFpb-4dd/edit?usp=sharing&ouid=113714659953565354449&rtpof=true&sd=true"
              description="This project involves a Notes application with the following use case: storing notes for different users, returning the most recent 10 notes upon user login, and automatically deleting notes other than the last 10 on an hourly basis. The technologies used include SpringBoot and MySQL for backend, and Angular for the frontend. The frontend design includes with CRUD functionality, and authentication logic."
              ghLink="https://github.com/sahas950/Note-Management"
            />
          </Col>

        </Row>
      </Container>



      <Container>
        <h1 className="project-heading">
        <br></br>
          <strong className="yellow">Mini </strong> Projects
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="2048 Game"
              detLink="https://docs.google.com/presentation/d/1hhKziBQl-fe_vn2rEu0pZBafj2BlzG07/edit?usp=sharing&ouid=113714659953565354449&rtpof=true&sd=true"
              description="It is an website based easy and fun puzzle game where user can move blocks of number in a nXn grid and form number 2048. (The numbers used in the grid are multiples of 2). This game is made using HTML, CSS and JavaScript."
              ghLink="https://github.com/sahas950/2048-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blogging Thoughts"
              detLink="https://docs.google.com/presentation/d/1YY3lZ9xPqMYihvFFNgec3Cq0OYoAmnWR/edit?usp=sharing&ouid=113714659953565354449&rtpof=true&sd=true"
              description="This project encompasses essential functionalities such as displaying blog posts, viewing post details, adding new posts, editing existing ones, deleting posts, and enabling users to like their favorite content. The application leverages both Redux and the Context API for robust state management, operates with local data storage."
              ghLink="https://github.com/sahas950/Blog-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Mangement"
              detLink="https://docs.google.com/presentation/d/1MMPwpi8L90U8M5yH2IyBBdnDhAKUNry9/edit?usp=sharing&ouid=113714659953565354449&rtpof=true&sd=true"
              description="This project involves a Spring MVC and JSP web app for Library Management. Librarians manage books, with details from another server (Application 2) via Spring Boot RESTful web services. Books are associated with authors, configured in the database. REST APIs are provided for CRUD operations on authors and books. It emphasizes Spring MVC, Tomcat, Spring Boot, Hibernate, and RESTful principles for efficient Library Management."
              ghLink="https://github.com/sahas950/LibraryCRUD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz app"
              description="Quiz App is an React project, offering users an engaging platform to participate in quizzes, answer a series of thought-provoking questions, and instantly access their quiz results. This project combines interactive user interfaces with robust functionality, allowing users to initiate quizzes, navigate through questions, and receive immediate feedback on their performance."
              ghLink="https://github.com/sahas950/Quiz-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stopwatch}
              isBlog={false}
              title="Stopwatch"
              description="This project is created using React, which provides users with the flexibility to control and track time according to their preferences. This application empowers users to start, stop, and resume the timer with ease, making it a versatile tool for various timing needs. "
              ghLink="https://github.com/sahas950/React-Stopwatch"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects