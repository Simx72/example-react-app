import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Chart1, Chart2 } from './chart';
import { MaterialIconRound as MDI } from '../material-icon';

const AppBody = () => {
  return (
    <div id="App-body">
      <BrowserRouter>
        <Switch>
          <Route path="/population">
            <Chart1 />
          </Route>
          <Route path="/ibm-stock-market">
            <Chart2 />
          </Route>
          <Route path="/">
            <div>
              <MDI icon='home' />
              <span>Inicio</span>
              <MDI icon='home' />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}


export { AppBody }