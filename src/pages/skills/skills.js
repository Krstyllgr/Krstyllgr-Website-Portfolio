import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./skills.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import services from "./skills.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faWindowMaximize, faObjectGroup } from '@fortawesome/free-solid-svg-icons'

const iconMap = {
  faShieldHalved: faShieldHalved,
  faWindowMaximize: faWindowMaximize,
  faObjectGroup: faObjectGroup
}

function Skills() {
const [service] = useState(services);
  return (
    <div>
      <Container
        className="services-container d-flex flex-column justify-content-center" // Add my-4 for vertical margin
      >
        {/* TITLE */}
        <div className="d-flex justify-content-center align-items-center text-light">
          <h1 className="fs-1">
            What <span style={{ color: "#0E8388" }}>I Do</span>
          </h1>
        </div>
        {/* CARDS */}
        <Row className="card-row">
          {service.map((service, i) => (
            <Col
              key={i}
              xs={12} // cards per row on extra small screens
              md={6} // cards per row on medium screens
              lg={4} // cards per row on large screens
              className="d-flex justify-content-center"
            >
              <Card className="card mt-5">
                <Card.Body className="d-flex flex-column justify-content-start align-items-center">
                <FontAwesomeIcon icon={iconMap[service.icon]} size="7x" className="card-icon"/>
                  <h5 className="text-light mb-3 fw-normal">{service.title}</h5>
                  <p className="p-details text-light">
                    {service.info}
                  </p>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
