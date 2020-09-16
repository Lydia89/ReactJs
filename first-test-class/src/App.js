import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;

*/
//exemple 1
/*

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello lydia!</h1>
      </div>
    );
  }
}

export default App;

*/

// exemple 2



import Title from './component/Title'

class App extends React.Component {
  render() {
    return (
      // <Title name="John" />
      // <Title age={18} />
      <Title
        name="John"
        age={18}
        languages={['french', 'english']} />


    );
  }
}

export default App;
