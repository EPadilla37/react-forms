import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('Todo component renders without crashing', () => {
  render(<Todo task="Sample Task" />);
});
