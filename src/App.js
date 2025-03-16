import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Router>
          <Switch>
            <Route exact path= "/">
              <Home/>
            </Route>
            <Route path= "/create">
              <Create/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
