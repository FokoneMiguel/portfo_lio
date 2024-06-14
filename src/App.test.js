// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Utiliser MemoryRouter pour les tests
import '@testing-library/jest-dom/extend-expect'; // Pour les matchers personnalisés
import App from './App';

test('renders Home page by default', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const homeTitle = screen.getByText(/Welcome to Miguel's Portfolio/i);
  expect(homeTitle).toBeInTheDocument();
});

test('renders About page', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );
  const aboutTitle = screen.getByText(/About Me/i);
  expect(aboutTitle).toBeInTheDocument();
});

test('renders Projects page', () => {
  render(
    <MemoryRouter initialEntries={['/projects']}>
      <App />
    </MemoryRouter>
  );
  const projectsTitle = screen.getByText(/Projects/i);
  expect(projectsTitle).toBeInTheDocument();
});

test('renders Skills page', () => {
  render(
    <MemoryRouter initialEntries={['/skills']}>
      <App />
    </MemoryRouter>
  );
  const skillsTitle = screen.getByText(/Skills/i);
  expect(skillsTitle).toBeInTheDocument();
});

test('renders Contact page', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>
  );
  const contactTitle = screen.getByText(/Contact Me/i);
  expect(contactTitle).toBeInTheDocument();
});
