import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  padding: 40px;
`;

const Project = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1.25rem;
  color: #555;
`;

const Projects = () => {
  const projects = [
    {
      title: 'site pour institut IPM',
      description: 'Il s\'agit ici d\'un site qui met en avant les atouts de ce centre de formation afin d\'attirer les visiteur à aller ce faire formez la',
    },
    {
      title: 'FarmShop',
      description: 'Il s\'agit ici d\'un site de vente d\'animaux de ferme en ligne ',
    },
    // Add more projects here
  ];

  return (
    <ProjectsContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <Project key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </motion.div>
          </Project>
        ))}
      </motion.div>
    </ProjectsContainer>
  );
};

export default Projects;
