import React from "react";
import "./about.css";
import { Container } from "react-bootstrap";
import AboutMe from "../../assets/grad.jpg";

function About() {
  return (
    <div>
      <Container className="main-container" id="aboutSection">
        <div className="myAboutDetails">
          <h1>About Me</h1>
          <h6>
            Hello! I’m Kristyl Axlee Alegre, a passionate Cybersecurity
            Specialist and a Freelance Web Developer. I graduated with a
            Bachelor of Science in Information Technology, majoring in Network
            Technology from Batangas State University - The National Engineering
            University.
          </h6>
          <h5>
            Certificates
          </h5>
          <ul>
            <li>Civil Service Eligible - Professional</li>
            <li>Best Capstone Project in Network Technology Major</li>
            <li>Dean’s Lister (1st Semester AY 2023 - 2024)</li>
          </ul>
        </div>
        <div className="myAboutImage">
          <img src={AboutMe} alt="Me" className="AboutMeImg" />
        </div>
      </Container>
    </div>
  );
}

export default About;
