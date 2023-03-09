import './App.css';
import ResponsiveDrawer from '../src/dashboard/dashdata';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ResponsiveDrawer/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
