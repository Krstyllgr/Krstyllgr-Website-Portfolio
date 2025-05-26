import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar/Navbar";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Works from "./pages/works/works";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faLinkedin,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";


function App() {
  return (
    <div className="App" id="homeSection">
      <NavBar />
      <Container className="main-content">
        <div className="myImage">
          <img
            className="me"
            src="https://media.giphy.com/media/HHJdQcn8NMLsFWQQmP/giphy.gif"
            alt="GIF OF MYSELF"
          />
        </div>
        <div className="myDetails">
          <p>Information Technology</p>
          <h1>Hello, I'm</h1>
          <h1 className="typewriter">Kristyl Axlee Alegre</h1>
          <p>Cybersecurity Trainee</p>
          <p>Web Developer</p>
        </div>
        {/* <div className="mySocials">
          <Link
            to="https://www.facebook.com/kristylalegre"
            className="icon-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/kristyl-axlee-alegre-9722a8285/"
            className="icon-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </Link>
          <Link
            to="https://github.com/Krstyllgr"
            className="icon-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </Link>
        </div> */}
      </Container>
      <section id="aboutSection">
        <About />
      </section>
      <section id="skillsSection">
        <Skills />
      </section>
      <section id="worksSection">
        <Works />
      </section>
    </div>
  );
}

export default App;
