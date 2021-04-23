import { render } from "@testing-library/react";
import { AppHeader } from "./header";

test('mdc-top-app-bar renders fine!', () => {
  const res = render(<AppHeader onMenuClick={()=>{}} titulo="Titulo de prueba" />)
  expect(res.getByText('Titulo de prueba')).toBeInTheDocument()
  expect(res.getByTestId('top-app-bar')).toHaveDisplayValue('render')
})

export { };