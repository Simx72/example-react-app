import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Chart2 } from './chart';

const AppBody = () => {
  return (
    <div id="App-body">
      <BrowserRouter>
        <Switch>
          <Route path="/ibm-stock-market">
            <Chart2 />
          </Route>
          <Route path="/">
            <div></div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}


export { AppBody }