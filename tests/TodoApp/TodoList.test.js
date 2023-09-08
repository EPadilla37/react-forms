import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('TodoList component renders without crashing', () => {
  render(<TodoList />);
});

test('Add a new todo to the list', () => {
  const { getByLabelText, getByText } = render(<TodoList />);
  const taskInput = getByLabelText('Task:');
  const addButton = getByText('Add Todo');

  fireEvent.change(taskInput, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  expect(taskInput.value).toBe('');
});

test('Clear input values after adding a todo', () => {
  const { getByLabelText, getByText } = render(<TodoList />);
  const taskInput = getByLabelText('Task:');
  const addButton = getByText('Add Todo');

  fireEvent.change(taskInput, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  expect(taskInput.value).toBe('');
});
