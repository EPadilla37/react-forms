import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('BoxList component renders without crashing', () => {
  render(<BoxList />);
});

test('Add a new box to the list', () => {
  const { getByLabelText, getByText } = render(<BoxList />);
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const bgColorInput = getByLabelText('Background Color:');
  const addButton = getByText('Add Box');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(bgColorInput, { target: { value: 'blue' } });

  fireEvent.click(addButton);

  expect(widthInput.value).toBe('');
  expect(heightInput.value).toBe('');
  expect(bgColorInput.value).toBe('');
});

test('Clear input values after adding a box', () => {
  const { getByLabelText, getByText } = render(<BoxList />);
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const bgColorInput = getByLabelText('Background Color:');
  const addButton = getByText('Add Box');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(bgColorInput, { target: { value: 'blue' } });

  fireEvent.click(addButton);

  
  expect(widthInput.value).toBe('');
  expect(heightInput.value).toBe('');
  expect(bgColorInput.value).toBe('');
});
