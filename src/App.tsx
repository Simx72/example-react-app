import 'material-design-icons/iconfont/material-icons.css';
import '@material/button/dist/mdc.button.min.css';
import '@material/icon-button/dist/mdc.icon-button.min.css';

import './App/styles';

import { AppBody } from './App/body'
import { AppHeader } from './App/header';

function App() {
  return (
    <div id="App">
      <AppHeader />
      <AppBody />
    </div>
  );
}

export default App;
