import 'material-design-icons/iconfont/material-icons.css';
import '@material/button/dist/mdc.button.min.css';
// import '@material/icon-button';

import './App/styles.css';

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
