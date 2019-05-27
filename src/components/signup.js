import React, { Component } from 'react';
import Input from './fields/inputField';
// import { userActions } from '../redux/users/userAction';
// import { Link } from 'react-router-dom'
import SKILLS from '../skills'
import { WithContext as ReactTags } from 'react-tag-input'

const KeyCodes = {
    comma: 188,
    enter: 13
}

const suggestions = SKILLS.map(skill => {
  return {
      id: skill,
      text: skill
  }
})
const delimiters = [KeyCodes.comma, KeyCodes.enter]

//Signup component
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser:'',
        skills: [],
        suggestions: suggestions,
        name: '',
        email: '',
        password: '',
        phone: '',
      formError: { email: '', password: '', name: '', phone: '' }
    }
  }

  handleDelete = (i) => {
    const { skills } = this.state
    this.setState({
        skills: skills.filter((tag, index) => index !== i)
    })
}

handleAddition = (tag) => {
    this.setState(state => ({ skills: [...state.skills, tag] })
    )
}

handleDrag = (tag, currPos, newPos) => {
    const skills = [...this.state.skills]
    const newTags = skills.slice()
    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)
    this.setState({ skills: newTags })
}
componentWillReceiveProps(nextProps) {
  this.setState({ currentUser: nextProps.currentUser }, () => {
    localStorage.setItem('isLoggedin',"true")
    localStorage.setItem("Currentuser", JSON.stringify(nextProps.currentUser.name));
    localStorage.setItem("myData", JSON.stringify(nextProps.currentUser));
    localStorage.setItem("user_type", JSON.stringify(nextProps.currentUser.roles));

    return this.props.history.push('/')
 })

}

  componentDidMount() {
    localStorage.getItem('isLoggedin') === "true" && this.props.history.push('/')
}
  
  handleInput=(e)=> {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
     
        ...prevState, [name]: value
      
    }), () => { this.validate(name, value) })
  }


  handleSubmit=(e)=> {
  
   const {name,email, password,phone,skills} = this.state;
    e.preventDefault();
    const roles="user"
    this.props.signup({name, email, password,phone,skills,roles})
    alert("successfully signup")
    
    this.setState({
      name: '',
      email: '',
      password: '',
      phone: '',
      skills: []
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
    const { skills, suggestions } = this.state
    return (
      <div>
        <form className="form" >
          NAME:
                <Input inputType={'text'}
            className="form-control"
            name={'name'}
            value={this.state.name}
            placeholder={'NAME'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.name}</p>
          <br></br>

          EMAIL:
                  <Input inputType={'text'}
            name={'email'}
            value={this.state.email}
            placeholder={'EMAIL'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.email}</p>
          <br></br>

          PASSWORD:
                  <Input inputType={'password'}
            name={'password'}
            value={this.state.password}
            placeholder={'PASSWORD'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.password}</p>
          <br></br>

          PHONE :
                  <Input 
                  inputType={'text'}
                  name={'phone'}
                  value={this.state.phone}
                  placeholder={'PHONE'}
                  handleChange={this.handleInput}
          />
          <p>{this.state.formError.phone}</p>

        SKILLS:

          <ReactTags
                  tags={skills}
                  suggestions={suggestions}
                  delimiters={delimiters}
                  handleDelete={this.handleDelete}
                  handleAddition={this.handleAddition}
                  handleDrag={this.handleDrag}
            />
           
         <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;