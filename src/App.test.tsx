import { render } from "@testing-library/react";
import App from "./App";

test('still nothing', () => {
  const res = render(<App />)
  expect(res.baseElement).toBeInTheDocument()
  expect(res.getByTestId('app')).toHaveDisplayValue('Renders Good!')
})

export { };