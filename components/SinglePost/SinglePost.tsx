import React from 'react';
import { TPost } from '../../types/post';
import Container from '../Container';
import styled from 'styled-components';

// Styled-components
const Article = styled.article`
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 15px;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 0;
`;

// JSX-markup

const SinglePost: React.FC<TPost> = ({ post }) => {
  return (
    <Container>
      <Article>
        <Title>{post.title}</Title>
        <Text>{post.body}</Text>
      </Article>
    </Container>
  );
};

export default SinglePost;
