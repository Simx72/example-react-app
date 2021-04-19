import 'material-design-icons/iconfont/material-icons.min.css';
import '@material/button/dist/mdc.button.min.css';

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
