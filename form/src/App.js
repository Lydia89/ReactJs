
import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import './css/style.css'

class App extends Component {
  constructor() {
    super()
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)

  }

  state = {
    email: '',
    password: '',
    rememberMe: false,
    inputvalideEmail: false,
    inputvalidePassword: false,
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  onChangeEmail(e) {
    e.preventDefault();

    this.setState({
      email: e.target.value
    })
    console.log(this.validateEmail(this.state.email))
    if (this.validateEmail(this.state.email)) {
      this.setState({
        inputvalideEmail: true
      })
    } else {
      this.setState({
        inputvalideEmail: false
      })
    }
  }

  onChangePassword(e) {
    e.preventDefault();
    e.persist();


    this.setState({ password: e.target.value }, () => {
      console.log(this.state.password.length)
      if (this.state.password.length > 8) {
        this.setState({ inputvalidePassword: true })
      } else {
        this.setState({ inputvalidePassword: false })
      }
    })
  }

  render() {
    return (


      < form className="form-group   container">
        <div className="form-group  ">
          <label htmlfor="validationServer01 ">
            Email adress:
            </label>
          <input value={this.state.email} onChange={this.onChangeEmail} type="email" className={this.state.inputvalideEmail ? 'form-control is-valid' : 'form-control is-invalid'} placeholder="Enter email" />

        </div>
        <div className="form-group   ">
          <label htmlfor="validationServer02"  >
            Password :</label>
          <input value={this.state.password} onChange={this.onChangePassword} type="password" className={this.state.inputvalidePassword ? 'form-control is-valid' : 'form-control is-invalid'} placeholder="Password" />

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