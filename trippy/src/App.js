import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer'
//import Config from './Config'

import './App.css';
import {
  BrowserRouter as Router,
  //Link,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>

          <div>
            <Switch>
              <Route path="/">

                <HomeContainer />
                

              </Route>
            </Switch>
          </div>



          


        </Router>
      </div>
    );
  }
}

export default App;
