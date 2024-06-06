import React from "react";
import styled from "styled-components";
import './App.css';
const AboutContainer = styled.div`
  padding: 2rem;
`;

const About = () => (
  <AboutContainer>
    <h1>About Me</h1>
    <p id='l1'>
      Hello! I'm Varun, a passionate full stack web developer eager to embark on
      my journey in the world of web development. My fascination with technology
      and problem-solving has led me to pursue a career where I can create
      innovative and user-friendly web applications.
    </p>
    <br></br>
    <p>
      <h2>Education</h2>
      <p id="l2">
        I recently graduated with a degree in Computer Science, where I honed my
        skills in programming, algorithms, and web development technologies.
        During my studies, I undertook several projects that allowed me to
        explore various aspects of web development, from front-end design to
        back-end functionality.
      </p>
      <h2>Passion and Goals</h2>
      <p id="l3">
        I am passionate about continuous learning and staying updated with the
        latest trends and technologies in web development. My goal is to
        leverage my skills and knowledge to create meaningful and impactful web
        applications that enhance user experiences and solve real-world
        problems.
      </p>
      <h2>Conclusion</h2>
      <p id="l4">
        In conclusion, I am excited about the opportunities that lie ahead in my
        journey as a full stack web developer. I am eager to collaborate with
        like-minded individuals and contribute to innovative projects that push
        the boundaries of web development.
      </p>
    </p>
  </AboutContainer>
);

export default About;
