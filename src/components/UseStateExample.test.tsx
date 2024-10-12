import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UseStateExample from './UseStateExample';

test('increments count when button is clicked', () => {
  render(<UseStateExample />);
  const button = screen.getByText('Increment');
  const countElement = screen.getByText(/Count:/);

  expect(countElement).toHaveTextContent('Count: 0');
  fireEvent.click(button);
  expect(countElement).toHaveTextContent('Count: 1');
});
