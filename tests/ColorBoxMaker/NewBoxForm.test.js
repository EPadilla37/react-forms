import React from 'react';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('NewBoxForm component renders without crashing', () => {
  render(<NewBoxForm />);
});
