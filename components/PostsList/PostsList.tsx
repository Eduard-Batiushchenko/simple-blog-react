import React from 'react';
import Link from 'next/link';
import { TPosts } from '../../types/post';
import routes from '../../routes';
import styled from 'styled-components';
import Container from '../Container';

// Styled-components

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  color: #3268a1;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Item = styled.li`
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ItemLink = styled.a`
  text-decoration: underline;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.2;
  color: black;
  &:hover,
  &:focus {
    cursor: pointer;
    color: #3268a1;
  }
`;

// JSX- markup

const PostsList: React.FC<TPosts> = ({ posts }) => {
  return (
    <Container>
      <Title>Fresh Posts</Title>
      <List>
        {posts
          .map(post => {
            return (
              post.title &&
              post.body && (
                <Item key={post.id}>
                  <Link href={`${routes.post}/${post.id}`}>
                    <ItemLink>{post.title}</ItemLink>
                  </Link>
                </Item>
              )
            );
          })
          .reverse()}
      </List>
    </Container>
  );
};

export default PostsList;
