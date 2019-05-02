import React, { Component } from 'react';
import Input from './fields/inputField';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginFields:
      {
        email: '',
        password: ''
      },
  
      formError: { email: '', password: ''}
    }
   
  }
  handleInput=(e)=> {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      LoginFields:
      {
        ...prevState.LoginFields, [name]: value
      }
    }), () => { this.validate(name, value) })
  }

  handleLogin=(e)=> {
   const {email, password} = this.state.LoginFields;
    e.preventDefault();
    axios.post('http://localhost:8082/sign', { email, password})
    .then((response) =>{
      console.log(localStorage.setItem('myData',JSON.stringify(response.data)));
      if((this.state.LoginFields.email===response.data.email) &&(this.state.LoginFields.password===response.data.password) )
    { 
      return this.props.history.push('/'); 
    } 
     else{
       return ('Invalid user');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  validate=(field, value)=> {
    let errors = this.state.formError;
    switch (field) {
      case 'email':
        errors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        errors.email = errors.email ? '' : 'must be valid email id'
        break;
      case 'password':
        errors.password = value.length >= 8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
        errors.password = errors.password ? '' : 'Password is too short and must be combination of an uppercase, a lowercase, a number and a special character'
        break;
      default:
        break;
    }
    this.setState({
      formError: errors
    })
  }

  render() {
    return (
      <div>
        <form className="form" >
        EMAIL:
          <Input inputType={'text'}
            name={'email'}
            value={this.state.LoginFields.email}
            placeholder={'email'}
            handleChange={this.handleInput} />
          <p>{this.state.formError.email}</p>

          PASSWORD:
          <Input inputType={'password'}
            name={'password'}
            value={this.state.LoginFields.password}
            placeholder={'password'}
            handleChange={this.handleInput}
          />
           <p>{this.state.formError.password}</p>
          <button className="btn btn-primary" onClick={this.handleLogin}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;