import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
background: #282c34;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
`;

const NavLinks = styled.nav`
a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    &:hover {
    text-decoration: underline;
    }
}
`;

const Header = () => {
return (
    <HeaderContainer>
    <h1>Miguel's Portfolio</h1>
    <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
    </NavLinks>
    </HeaderContainer>
);
};

export default Header;
