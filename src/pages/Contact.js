import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  padding: 40px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;

  label {
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
  }

  input, textarea {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #282c34;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;

    &:hover {
      background: #444;
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact Me</h2>
        <ContactForm>
          <label htmlFor="name">Name</label>
          <motion.input
            type="text"
            id="name"
            name="name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />

          <label htmlFor="email">Email</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <label htmlFor="message">Message</label>
          <motion.textarea
            id="message"
            name="message"
            rows="5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Send
          </motion.button>
        </ContactForm>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact;
