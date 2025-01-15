import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works Ns.</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="LocalSphere - Yelp Clone Application"
              description="LocalSphere is a web application designed to help users discover and interact with local businesses. Built with the PERN stack, it allows users to explore businesses, leave reviews, and rate their experiences. The app features a robust PostgreSQL database for efficient management of business details, user profiles, and reviews, ensuring a smooth and scalable user experience."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="E-Commerce Web Application"
              description="This project is a fully functional e-commerce platform developed using the MERN stack, enabling users to browse products, manage their cart, and complete transactions with an integrated payment gateway. The platform features a secure user authentication system and ensures a seamless shopping experience through optimized performance with lazy loading and state management using Redux. The application provides a modern, scalable solution for online shopping with a user-friendly interface."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mini To-Do Application"
              description=" A lightweight to-do application built with the Django framework, designed for users to efficiently manage their tasks. The application includes features for creating, updating, and deleting tasks, along with a secure user authentication system for personalized task management. Initially deployed locally, it is structured for scalability and future deployment on cloud platforms."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
