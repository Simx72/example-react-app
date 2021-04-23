import { queryByTestId } from "@testing-library/react";

test('mdc-top-app-bar renders fine!', () => {
  expect(
    queryByTestId(
      document.body,
      'top-app-bar'
    )
  ).toBeInTheDocument()
})

export { };