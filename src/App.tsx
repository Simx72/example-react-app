import '@material/react-material-icon/dist/material-icon.min.css';
import './App/sass/styles.scss';

import { AppDrawer } from './App/drawer';

function App() {
  return (
    <div id="App">
      <input type="hidden" value="Renders Good!" data-testid="app"/>
      <AppDrawer />
    </div>
  );
}

export default App;
