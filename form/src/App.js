import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import './css/style.css'

class App extends Component {
  render() {
    return (
<from className= "form-group col-md-6">

<label for="validationServer01">Email</label>

<input type="email" class="form-control is-valid is-invalid" id="validationServer01" placeholder=" Enter Email"></input>
</from>
      
  
    );
  }
}

export default App;
