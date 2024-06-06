import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Varuncl. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
