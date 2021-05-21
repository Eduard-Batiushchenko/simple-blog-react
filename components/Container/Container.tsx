import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;
`;

const Container: React.FC = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Container;
