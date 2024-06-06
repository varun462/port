import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

const Contact = () => (
  <ContactContainer>
    <h1>Contact Me</h1>
    <Form>
      <Input type="text" placeholder="Your Name" required />
      <Input type="email" placeholder="Your Email" required />
      <TextArea placeholder="Your Message" rows="5" required />
      <Button type="submit">Send</Button>
    </Form>
  </ContactContainer>
);

export default Contact;
