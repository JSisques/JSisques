import './App.css';
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
