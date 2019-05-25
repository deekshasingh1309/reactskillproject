import React, { Component } from 'react';
import Input from './fields/inputField';
// import { userActions } from '../redux/users/userAction';
// import { Link } from 'react-router-dom'

//Signup component
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SignupFields: {
        name: '',
        email: '',
        password: '',
        phone: ''
        
      },
   
      formError: { email: '', password: '', name: '', phone: '' }
    }
  }

  componentDidMount() {
    localStorage.getItem('isLoggedin') === "true" && this.props.history.push('/')
}
  
  handleInput=(e)=> {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      SignupFields:
      {
        ...prevState.SignupFields, [name]: value
      }
    }), () => { this.validate(name, value) })
  }


  handleSubmit=(e)=> {
  
   const {name,email, password,phone} = this.state.SignupFields;
    e.preventDefault();
    const roles="user"
    this.props.signup({name, email, password,phone,roles})
    alert("successfully signup")
    console.log(roles);
    this.setState({
      name: '',
      email: '',
      password: '',
      phone: ''
    
      })

      return this.props.history.push('/login'); 

}


  validate=(field, value)=> {
    let errors = this.state.formError;
    switch (field) {
      case 'name':
        errors.name = value.match(/^[A-Za-z\s]+$/i)
        errors.name = errors.name ? '' : 'must be only alphabets'
        break;
      case 'email':
        errors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        errors.email = errors.email ? '' : 'must be valid email id'
        break;
      case 'password':
        errors.password = value.length >= 8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
        errors.password = errors.password ? '' : 'Password is too short and must be combination of an uppercase, a lowercase, a number and a special character'
        break;
      case 'phone':
        errors.phone= value.length === 10 && value.match(/^[0-9]+$/)
        errors.phone = errors.phone ? '' : 'only numbers allowed and 10 digits'
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
          NAME:
                <Input inputType={'text'}
            className="form-control"
            name={'name'}
            value={this.state.SignupFields.name}
            placeholder={'NAME'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.name}</p>
          <br></br>

          EMAIL:
                  <Input inputType={'text'}
            name={'email'}
            value={this.state.SignupFields.email}
            placeholder={'EMAIL'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.email}</p>
          <br></br>

          PASSWORD:
                  <Input inputType={'password'}
            name={'password'}
            value={this.state.SignupFields.password}
            placeholder={'PASSWORD'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.password}</p>
          <br></br>

          PHONE :
                  <Input 
                  inputType={'text'}
                  name={'phone'}
                  value={this.state.SignupFields.phone}
                  placeholder={'PHONE'}
                  handleChange={this.handleInput}
          />
          <p>{this.state.formError.phone}</p>
          <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;