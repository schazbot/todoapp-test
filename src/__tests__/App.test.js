import React from 'react';
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from '../App'

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('it displays default todo items', () => {
  const { getByTestId } = render(<App />);
  const todoList = getByTestId('todos-ul');
  expect(todoList.children.length).toBe(2);  
});

it('allows input', () => {
  const {getByTestId } = render(<App />)

  let item = 'Learn React'
  const todoInputElement = getByTestId('todo-input');
  todoInputElement.value = item;
  fireEvent.change(todoInputElement);
  expect(todoInputElement.value).toBe('Learn React')
});

it('adds a new todo item', () => {
  const { getByText, getByTestId } = render(<App />);
  const todoInputElement = getByTestId('todo-input');
  const todoList = getByTestId('todos-ul');
  todoInputElement.value = 'Learn React';
  fireEvent.change(todoInputElement);
  fireEvent.click(getByText('Add Task'))
  expect(todoList.children.length).toBe(3); 
});

