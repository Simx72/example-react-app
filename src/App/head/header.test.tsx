import { getByTestId } from "@testing-library/react";

test('mdc-top-app-bar renders fine!', () => {
  expect(
    getByTestId(
      document.getElementById('top-app-bar-section-start'),
      'top-app-bar'
    )
  ).toBeInTheDocument()
})

export { };