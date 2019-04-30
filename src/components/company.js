import React, { Component } from 'react';
import Input from './fields/inputField';
import axios from 'axios';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
        jobFields:{ 
        job_profile  : '',
        company_name: '',
        job_description:'',
        job_expire_on:'',
        city:'',
        salary:''
    }
 }}
   
  
  handleInput=(e)=> {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
        jobFields:
      {
        ...prevState.jobFields, [name]: value
      }
    }))
  }


  handleCompany=(e)=> {
   const {job_profile, company_name,job_description,job_expire_on,city, salary} = this.state.jobFields;
    e.preventDefault();
    axios.post(
    'http://localhost:8082/createjobs', 
    {job_profile, company_name,job_description,job_expire_on,city, salary}
    )
    .then(() =>{
      this.props.history.push('/');  
    })
    .catch((error)=> {
      console.log(error);
    });
  }

//   validate=(field, value)=> {
//     let errors = this.state.formError;
//     switch (field) {
//       case 'email':
//         errors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
//         errors.email = errors.email ? '' : 'must be valid email id'
//         break;
//       case 'password':
//         errors.password = value.length >= 8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
//         errors.password = errors.password ? '' : 'Password is too short and must be combination of an uppercase, a lowercase, a number and a special character'
//         break;
//       default:
//         break;
//     }

//     this.setState({
//       formError: errors
//     })

//   }

  render() {
    return (
      <div>
        <form className="form" >
        Profile:
          <Input inputType={'text'}
            name={'job_profile'}
            value={this.state.jobFields.job_profile}
            placeholder={'job profile'}
            handleChange={this.handleInput} />
          {/* <p>{this.state.formError.job_profile}</p> */}

          Company Name:
          <Input inputType={'text'}
            name={'company_name'}
            value={this.state.jobFields.company_name}
            placeholder={'company name'}
            handleChange={this.handleInput}
          />
           {/* <p>{this.state.formError.company_name}</p> */}

           Job description:
          <Input inputType={'text'}
            name={'job_description'}
            value={this.state.jobFields.job_description}
            placeholder={'job description'}
            handleChange={this.handleInput} 
            />
          {/* <p>{this.state.formError.job_description}</p> */}

          Job expire date:
          <Input inputType={'text'}
            name={'job_expire_on'}
            value={this.state.jobFields.job_expire_on}
            placeholder={'job expire on'}
            handleChange={this.handleInput} 
            />
          {/* <p>{this.state.formError.job_expire_on}</p> */}

          City:
          <Input inputType={'text'}
            name={'city'}
            value={this.state.jobFields.city}
            placeholder={'city'}
            handleChange={this.handleInput} 
            />
          {/* <p>{this.state.formError.city}</p> */}

          Salary:
          <Input inputType={'text'}
            name={'salary'}
            value={this.state.jobFields.salary}
            placeholder={'salary'}
            handleChange={this.handleInput} 
            />
          {/* <p>{this.state.formError.salary}</p> */}

          <button className="btn btn-primary" onClick={this.handleCompany}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Company;