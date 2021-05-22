import React from 'react';
import Link from 'next/link';
import routes from '../../routes';
import styled from 'styled-components';
import Container from '../Container';

// Styled-components

const Header = styled.header`
  background-color: #fff;
  box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 20px;
  margin-bottom: 20px;
`;

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
`;

const Logo = styled.a`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: #3268a1;

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.a`
  font-weight: 700;
  font-size: 15px;
  line-height: 1.2;
  display: inline-block;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: #3268a1;
  color: #fff;

  &:hover,
  &:focus {
    cursor: pointer;
    border-color: #3268a1;
    background-color: transparent;
    color: #3268a1;
  }
`;

// JSX-Component

const AppMenu: React.FC = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <List>
            <li>
              <Link href={routes.home}>
                <Logo>Next | Blog</Logo>
              </Link>
            </li>
            <li>
              <Link href={routes.createPost}>
                <Button>Create Post</Button>
              </Link>
            </li>
          </List>
        </Nav>
      </Container>
    </Header>
  );
};

export default AppMenu;
