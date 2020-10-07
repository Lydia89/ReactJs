import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './components/Home'
import Battle from './components/battle'
import Mylist from './components/my-list'
import Popularbattle from './components/popular-battle'
import Popular from './components/popular'

class App extends Component {
  render() {
    return (

      <Router>

        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/battle/">Battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular-battle</Link></li>
              <li><Link to="/my-list/">My-list</Link></li>
            </ul>
          </nav>


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/battle/">
              <Battle />
            </Route>
            <Route exact path="/popular/">
              <Popular />
            </Route>
            <Route path="/popular-battle/">
              <Popularbattle />
            </Route>
            <Route path="/my-list/">
              <Mylist />
            </Route>

          </Switch>






        </div>
      </Router>

    );
  }
}

export default App;
