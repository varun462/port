import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
`;

const projects = [
  { id: 1, name: 'Tourism Website', 
  description: 'Developed a dynamic tourism website designed to provide travelers with essential information about various destinations. The site features an intuitive user interface and real-time weather updates to enhance the user experience.Weather Fetch API Integration: Utilized a weather API to fetch and display real-time weather data for various destinations. This feature helps travelers plan their trips better by providing up-to-date weather conditions.',
  github:<a href='https://github.com/varun462/Tech_with_travel1.git'>source code</a>},
  { id: 2, name: 'Myntra Clone', description: 'Developed a fully responsive and functional clone of the Myntra e-commerce website using HTML, CSS, and JavaScript. The project aimed to replicate the user experience and interface of the popular online fashion retailer, Myntra. Successfully mimicked the appearance and functionality of a professional e-commerce site.Enhanced skills in front-end development and improved understanding of responsive design principles.Demonstrated proficiency in HTML, CSS, and JavaScript through a practical project.',
    github:<a href='https://github.com/varun462/MyntraClone.git'>source code</a>
  },
  // Add more projects as needed
];

const Backend=[{id:3,name:'Ecommerce Admin Management Website',
    description:'Developed a full-stack e-commerce admin management website, designed to provide a seamless user experience for both administrators and customers. The platform allows administrators to manage products and view weather updates, while customers can browse and purchase products. Product Management: Admins can add, edit, and delete products, ensuring the product catalog up-to-date.User Authentication: Implemented secure authentication using JWT to distinguish between regular users and admins.Backend Development: Developed RESTful APIs using Node.js and Express.js to handle CRUD operations for products and user authentication.Database Management: Managed product and user data using MongoDB, ensuring efficient data storage and retrieval.Enhanced customer experience with an intuitive and user-friendly interface.'
,github:<a href='https://github.com/varun462/Ecomm.git'>source code</a>
}
]

const Projects = () => (
  <ProjectsContainer>
    <h1>Projects</h1>
    <h1>Frontend Projects</h1>
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <strong>{project.name}</strong>: {project.description}
          <br></br>
          <strong>github : {project.github}</strong>
        </li>
      ))}
    </ul>
    <h1>Full Stack  Project</h1>
    <ul>
      {Backend.map(Backend => (
        <li key={Backend.id}>
          <strong>{Backend.name}</strong>: {Backend.description}
          <br></br>
          <strong>github : {Backend.github}</strong>
        </li>
      ))}
    </ul>
  </ProjectsContainer>
);

export default Projects;
