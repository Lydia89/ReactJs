
/*

import React from 'react';

import logo from './logo.svg';
import './App.css';
import Title from './Title';

function App() {
  return (
  /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  */
 /*
 <div class="container">
   
 <Title/>
 </div>
  );
}

export default App;
*/

// exemple1
/*
import React from 'react';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }
  



}
*/
// exemple 

import React from 'react';
import Title from './Title';
class App extends React.Component {

render() {
  return (
      <Title name="John" />
  );
}
}
export default App;