import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

//import placeholder from '../../img/placeholder.png'
import Home from './components/Discover'
import Battle from './components/DiscoverBattle'
import Mylist from './components/my-list'
import Popularbattle from './components/popular-battle'
import Popular from './components/popular'
//import Card from './components/movie/Card'
//import Quiz from './components/quiz'

class App extends Component {



  render() {
    return (

      <Router>

        <div>
          <nav>
            <ul>
              <li><Link to="/"> This week</Link></li>
              <li><Link to="/battle/">This week battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popularbattl </Link></li>
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
