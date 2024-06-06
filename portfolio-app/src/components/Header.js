import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #333;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;

  &:hover {
    color: #ccc;
  }
`;

const Header = () => (
  <Nav>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/certifications">Certifications</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  </Nav>
);

export default Header;
