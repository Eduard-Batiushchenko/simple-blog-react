import { useRouter } from 'next/router';
import React, { useState } from 'react';
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

const Input = styled.textarea`
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

  const handleSubmitInput = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(postNewBlogOperator(form));
    setForm(initialState);
    router.push(routes.home);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmitInput}>
        <Label>
          Title text
          <Input
            name="title"
            value={form.title}
            onChange={handleInput}
            rows={3}
            required
          />
        </Label>
        <Label>
          Body text
          <Input
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
