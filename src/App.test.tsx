import { render } from "@testing-library/react";
import App from "./App";

test('App renders correctly', () => {
  jest.mock('react-chartjs-2', () => ({
    Doughnut: () => null,
    Bar: () => null
  }))
  const res = render(<App />)
  expect(res.baseElement).toBeInTheDocument()
  expect(res.getByTestId('app')).toHaveDisplayValue('Renders Good!')
})

export { };