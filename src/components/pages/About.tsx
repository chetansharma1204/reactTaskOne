import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import avatar from "../../avatar.jpeg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const name = "Chetan Sharma";

  const technologies = [
    "Javascript",
    "TypeScript",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Mongoose",
    "ReactJS",
    "Redux",
  ];
  
  const intro = `Hi, I'm ${name}! I'm a passionate full stack developer with a strong focus on delivering high-quality software.`;
  const expertise = `With a deep understanding of ${technologies.join(
    ", "
  )}, I have the expertise to deliver elegant and scalable software solutions that meet your needs. Whether you're looking to build a small prototype or an enterprise-grade application, I have the skills to make it happen.`;
  const goals = `My goal is to leverage my expertise and experience to help clients build the best possible software solutions. I take a customer-centric approach to development, focusing on understanding your needs and delivering solutions that exceed your expectations.`;
  const useful = `If you're looking for a full stack developer who is passionate, dedicated, and experienced, I'm your guy! I'll work closely with you to understand your needs and deliver solutions that help you achieve your goals. Let's work together to bring your ideas to life!`;

  return (
    <Container className="my-4">
      <Row>
        <Col md={4}>
          <Image src={avatar} roundedCircle fluid />
        </Col>
        <Col md={8}>
          <h1>About Us</h1>
          <p>{intro}</p>
          <h2>Expertise</h2>
          <p>{expertise}</p>
          <h2>Goals</h2>
          <p>{goals}</p>
          <h2>How I can be useful</h2>
          <p>{useful}</p>
        </Col>
      </Row>
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </Container>
  );
};

export default AboutUs;
