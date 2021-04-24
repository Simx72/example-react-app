import { render } from "@testing-library/react";
import App from "./App";

test('App renders correctly', () => {
  jest.mock('react-chartjs2', () => 'Chart')
  const res = render(<App />)
  expect(res.baseElement).toBeInTheDocument()
  expect(res.getByTestId('app')).toHaveDisplayValue('Renders Good!')
})

export { };