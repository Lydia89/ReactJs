import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Add from'./component/Add'
import List from './component/List'
import Pay from './component/Pay'
class App extends Component {


  state={
    activeTab:'add',
    items:[]
  }
  render() {
    return (
      <div className="App">
       <Add></Add>
       <List></List>
       <Pay></Pay>
      </div>
    );
  }
}

export default App;
