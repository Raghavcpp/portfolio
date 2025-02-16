import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import notesfanatic from "../../Assets/Projects/notes-fanatic.png";
import wpb from "../../Assets/Projects/wpb.png";
import aho from "../../Assets/Projects/aho.png";
import bridge from "../../Assets/Projects/bridge.png";
import smb from "../../Assets/Projects/smb.png";
import mft from "../../Assets/Projects/mft.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bridge}
              isBlog={false}
              title="bridge"
              description="Bridging the Communication Gap Between Common People and Big Organizations using MERN Stack."
              ghLink="https://github.com/raghavcpp/bridge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mft}
              isBlog={false}
              title="Mental Fitness Tracker"
              description="The Mental Fitness Tracker is an innovative application designed to assist users in tracking and improving their mental fitness. The application aims to promote mental health and wellness by providing users with a user-friendly tool to assess and manage their mental well-being effectively."
              ghLink="https://github.com/Raghavcpp/IBM_SkillBuild_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aho}
              isBlog={false}
              title="Data visualization Dashboard"
              description="Here we visualize the datasets on Aviation, Oil & Health. Which helps us to analyze andunderstand it. Its user-friendly and modern style gives it a minimalistic look. It also hadAuthentication."
              ghLink="https://github.com/Raghavcpp/AHO-Dashboard"
              demoLink="https://aho-dashboard.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notesfanatic}
              isBlog={false}
              title="Notes Fanatic"
              description="It is a web application designed for students to access subject-wise notes in PDF format forvarious degree programs. It provides a structured repository of study materials categorized bybranch (CSE, ME, CSIT, EE, ECE, B.Pharm, M.Tech, MBA, MCA), semester, and subject,making it easy for students to find and read the notes they need."
              ghLink="https://github.com/Raghavcpp/notes-fanatic"
              demoLink="https://notes-fanatic.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smb}
              isBlog={false}
              title="Social Media Bot"
              description="The Social Media Bot automates the posting of events on various social media platforms, including Twitter, Facebook, Instagram, and LinkedIn. This bot streamlines content sharing by reducing manual effort and ensuring timely updates. It utilizes Selenium for web automation, Pillow for image processing, and Python scripts to handle authentication, scheduling, and posting tasks."
              ghLink="https://github.com/Raghavcpp/project/tree/main/social%20media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wpb}
              isBlog={false}
              title="Wordpress Bot"
              description="The WordPress Bot automates blog and page creation on WordPress. It simplifies the content publishing workflow by automatically generating and uploading blog posts along with images. Using Selenium, the bot navigates the WordPress interface to create new posts, while Pillow handles image processing to enhance the visual content. This tool is particularly useful for bloggers, content creators, and organizations that require frequent updates to their websites."
              ghLink="https://github.com/Raghavcpp/project/tree/main/WordPressBot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
