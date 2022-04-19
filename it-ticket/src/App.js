import Main from './components/MainComponent';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
        <div className="App">
          <Main />
        </div>
  );
}

export default App;
