import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import './css/style.css'

class App extends Component {
  
  constructor() {
    super()

  }

  state = {

    inputvalideEmail: true,
    inputvalidePassword: true,
  }

  /*<form className= "form-group col-md-6">

<label for={this.state.inputvalideEmail}>Email</label>

<input type="email" class="form-control is-valid " id={this.state.inputvalideEmail} placeholder=" Enter Email"></input>
   </form>*/






  render() {
    return (


      < form className="form-group   container">
        <div className="form-group  ">
          <label for="validationServer01 ">
            Email adress:
     <input type="email" name="Email"  id="validationServer01" placeholder="Entre Email"
     
      className={((this.state.inputvalideEmail) ? 'is-invalid  ' : '') + 'form-control    is-valid '}
      className={((this.state.inputvalideEmail) ? 'is-valid   ' : '') + 'form-control is-invalid'}  
        />
          </label>

        </div>
        <div className="form-group   ">
          <label for="validationServer02"  >
            Password :
    <input type="password" name="Password" class="form-control" id="validationServer02" placeholder="Entre Password" />
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" aria-label="Checkbox for following text input" value="Remember me" />

  Remember me
  </label>
        </div>
        <button type="submit" value="Submit" class="btn btn-primary" >

          Submit
</button>
      </form>

    );
  }
}

export default App;
