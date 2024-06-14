import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 40px;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #555;
`;

const About = () => {
  return (
    <AboutContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>About Me</Title>
        <Paragraph>
          Je suis un développeur web avec des compétences en création de design UI, 
          réalisation de flyers et affiches publicitaires, et en maintenance logicielle. 
          Diplômé d'un BAC en Technologie de l'informatique, avec un certificat en Digitalisation, 
          Développement Web, et Python. J'ai effectué des stages dans les entreprises IPM et UZCAsarl.
          J'ai également la maîtrise des IA.
        </Paragraph>
      </motion.div>
    </AboutContainer>
  );
};

export default About;
