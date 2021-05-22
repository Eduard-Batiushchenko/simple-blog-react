import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { postSuccessMessage, postErrorMessage } from '../../pnotify/pnotify';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { postNewBlogOperator } from '../../redux/operators/postsOperations';
import Container from '../Container';
import routes from '../../routes';

// Styled-components
const Form = styled.form`
  border: 1px solid grey;
  border-radius: 10px;
  padding: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: #3268a1;
`;

const Texterea = styled.textarea`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  outline: none;
  border: 1px solid grey;
  margin-top: 10px;
  padding: 10px;

  &:focus {
    border: 1px solid blueviolet;
    outline: none;
  }
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.2;
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
const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  color: #3268a1;
`;
// JSX-markup

const CreateNewPost: React.FC = () => {
  const initialState = {
    title: '',
    body: '',
  };
  const [form, setForm] = useState({ ...initialState });

  const dispatch = useDispatch();
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    const currentInput = e.currentTarget.name;
    setForm(state => ({ ...state, [currentInput]: value }));
  };

  const handleSubmitInput = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await dispatch(postNewBlogOperator(form));
      postSuccessMessage('Post successfully created');
      setForm(initialState);
      router.push(routes.home);
    } catch (error) {
      postErrorMessage('Ooops, something went wrong, please try again');
    }
  };
  return (
    <Container>
      <Title>Create Post Form</Title>
      <Form onSubmit={handleSubmitInput}>
        <Label>
          Title text
          <Texterea
            name="title"
            value={form.title}
            onChange={handleInput}
            rows={3}
            required
          />
        </Label>
        <Label>
          Body text
          <Texterea
            name="body"
            value={form.body}
            onChange={handleInput}
            rows={10}
            required
          />
        </Label>
        <Button type="submit">Submit creation</Button>
      </Form>
    </Container>
  );
};

export default CreateNewPost;
