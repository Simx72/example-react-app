import { queryByTestId } from "@testing-library/dom";

test('mdc-top-app-bar renders fine!', () => {
  expect(
    queryByTestId(
      document.body,
      'top-app-bar'
    )
  ).toBeInTheDocument()
})

export { };