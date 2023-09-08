import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('Box component renders without crashing', () => {
  render(<Box width={100} height={100} backgroundColor="red" />);
});
