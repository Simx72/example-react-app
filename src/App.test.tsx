import { render } from "@testing-library/react";
import App from "./App";

jest.mock('react-chartjs-2', () => ({
  Bar: () => null, // add any additional chart types here
  Line: () => null
}));

test('App renders correctly', () => {
  const res = render(<App />)
  expect(res.baseElement).toBeInTheDocument()
  expect(res.getByTestId('app')).toHaveDisplayValue('Renders Good!')
})

export { };