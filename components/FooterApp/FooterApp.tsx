import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  color: #3268a1;
  cursor: default;
`;
const Footer = styled.footer`
  padding: 20px;
  background-color: #c0c0c0;
`;

const FooterApp = () => {
  return (
    <Footer>
      <Container>
        <Title>My Blog &#x000A9; 2021</Title>
      </Container>
    </Footer>
  );
};

export default FooterApp;
