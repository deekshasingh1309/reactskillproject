import React, { Component } from 'react';
import Input from './fields/inputField';

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

  componentDidMount() {
    localStorage.getItem('isLoggedin') === "true" && this.props.history.push('/')
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

  componentWillReceiveProps(nextProps) {
    this.setState({ currentUser: nextProps.currentUser }, () => {
      localStorage.setItem('isLoggedin',"true")
      localStorage.setItem("Currentuser", JSON.stringify(nextProps.currentUser.name));
      localStorage.setItem("myData", JSON.stringify(nextProps.currentUser));
      localStorage.setItem("user_type", JSON.stringify(nextProps.currentUser.roles));
      localStorage.setItem("Currentid", JSON.stringify(nextProps.currentUser._id));

      return this.props.history.push('/')
   })

}

  handleLogin=(e)=> {
    e.preventDefault();
    this.props.login({
      email: this.state.LoginFields.email,
      password: this.state.LoginFields.password
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