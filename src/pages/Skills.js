import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  padding: 40px;
`;

const Skill = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Skills = () => {
  const skills = [
    'Web Development',
    'UI Design',
    'Flyer Creation',
    'Software Maintenance',
    'Digitalization',
    'Python',
    'AI Mastery',
    // Add more skills here
  ];

  return (
    <SkillsContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {skill}
            </motion.div>
          </Skill>
        ))}
      </motion.div>
    </SkillsContainer>
  );
};

export default Skills;
