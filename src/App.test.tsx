import { render, screen } from '@testing-library/react';
import App from './App';

test('TopAppBar renders correctly', () => {
  render(<App />);
  document.getElementById('top-app-bar')
});


export {}