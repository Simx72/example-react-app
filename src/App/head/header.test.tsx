import { getByTestId } from "@testing-library/react";

test('mdc-top-app-bar renders fine!', () => {
  expect(
    getByTestId(
      document.body,
      'top-app-bar'
    )
  ).toBeInTheDocument()
})

export { };