import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Router>
          <Switch>
            <Route path= "/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
