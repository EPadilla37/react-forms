import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('NewTodoForm component renders without crashing', () => {
  render(<NewTodoForm />);
});
