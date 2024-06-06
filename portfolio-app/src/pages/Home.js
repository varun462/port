import React from 'react';
import styled, { keyframes } from 'styled-components';
import profilePic from '../assets/profile.jpg'; // Correct path

// Define keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 25;
  }
`;

// Apply the animation to the HomeContainer
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
  text-align: center;
  animation: ${fadeIn} 2s ease-in;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
  animation: ${fadeIn} 2s ease-in;
`;

const TextContainer = styled.div`
  animation: ${fadeIn} 1s ease-in;
`;

const Home = () => (
  <HomeContainer>
    <ProfileImage src={profilePic} alt="Profile" />
    <TextContainer>
      <h1>Welcome to My Portfolio</h1>
      <h1>Varun CL</h1>
      <h4>Full Stack WebDeveloper</h4>
      <h2>Computer Science And Engineering</h2>
       <h3>Malnad College Of Engineering,Hassan-573201</h3>
    </TextContainer>
  </HomeContainer>
);

export default Home;






