import { Chart1, Chart2 } from './chart';
import { Home } from './home';

const AppBody = (props: { index: number }) => {
  let elt: JSX.Element;
  switch (props.index) {
    case 1:
      elt = (<Chart2 />)
      break
    case 2:
      elt = (<Chart1 />)
      break
    default:
      elt = (<Home />)
      break
  }

  return (
    <div id="App-body">
      {elt}
    </div>
  )
}


export { AppBody }