import '@material/react-material-icon/dist/material-icon.min.css';
import './App/sass/styles.scss';

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
