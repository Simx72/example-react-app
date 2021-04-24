import { render } from "@testing-library/react";
import { AppBody } from "./body";

jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
  Line: () => null
}));

test('App renders correctly', () => {
  const res = render(<AppBody />)
  expect(res.baseElement).toBeInTheDocument()
})

export { };