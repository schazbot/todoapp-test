import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("displays a list of todo items", () => {
  const { getByTestId } = render(<App />);
  const toDoList = getByTestId("todos-ul");
  expect(toDoList.children.length).toBe(2);
});

it("allows user to enter values into the input field", () => {
  const { getByTestId } = render(<App />);
  const todoInput = getByTestId("todo-input");
  const newValue = "Do things";

  fireEvent.change(todoInput, { target: { value: newValue } });
  expect(todoInput.value).toBe(newValue);
});

it('adds a new todo item', () => { 
    const { getByTestId } = render(<App />)
    const todoInput = getByTestId('todo-input')
    const toDoList = getByTestId('todos-ul')
    todoInput.value = "Eat Biscuits"
    fireEvent.change(todoInput)
    fireEvent.click(getByTestId("add-task"))
    expect(toDoList.children.length).toBe(3)
})

