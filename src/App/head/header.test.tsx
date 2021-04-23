test('mdc-top-app-bar renders fine!', () => {
  expect(
    document.querySelector('[data-testid="top-app-bar"]')
  ).toBeInTheDocument()
})

export { };