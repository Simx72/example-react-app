import { queryByTestId, render } from '@testing-library/react';
import App from './App';

test('TopAppBar renders correctly', () => {
  render(<App />);
  expect(queryByTestId('top-app-bar')).toBeInTheDocument()
});


export {}