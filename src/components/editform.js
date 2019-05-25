import React, { Component } from 'react';
import Input from './fields/inputField';

class JobEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editFields: {
        job_profile: '',
        company_name: '',
        job_description: '',
        job_expire_on: '',
        city: '',
        salary: '' 
      },
      user : JSON.parse(localStorage.getItem('myData')),
      formError: { job_profile: '',  job_description: '', job_expire_on: '', city: '',salary: ''}
    }
  }

  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      editFields:
      {
        ...prevState.editFields, [name]: value
      }
    }), () => { this.validate(name, value) })
  }

  componentDidMount(){
      
      var jobobj=this.props.location.state.data
 
       this.setState({
              job_profile:jobobj.job_profile,
              company_name: jobobj.company_name,
              job_description: jobobj.job_description,
              job_expire_on: jobobj.job_expire_on,
              city: jobobj.city,
              salary: jobobj.salary
        })

  }

  handleEdit = (e) => {
    e.preventDefault();
    
    const { job_profile, company_name, job_description, job_expire_on, city, salary }=this.state 
    
     this.props.EditJobs({job_profile,  company_name, job_description, job_expire_on, city, salary})
     alert("Successfully Edited")
    
     this.setState({
        job_profile: '',
        company_name: '',
        job_description: '',
        job_expire_on: '',
        city: '',
        salary: ''
  
    })
      return this.props.history.push('/');

  }


  validate = (field, value) => {
    let errors = this.state.formError;
    switch (field) {
      case 'job_profile':
        errors.job_profile = value.match(/^[A-Za-z\s]+$/i)
        errors.job_profile = errors.job_profile ? '' : 'it is invalid';
        break;

      case 'job_description':
        errors.job_description = value.match(/^[A-Za-z\s]+$/i)
        errors.job_description = errors.job_description ? '' : 'it is invalid';
        break;

      case 'job_expire_on':
        errors.job_expire_on = value.match(/((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\.|-|\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26]))/)
        errors.job_expire_on = errors.job_expire_on ? '' : 'date must in the format of dd/mm/yyyy';
        break;

      case 'city':
        errors.city = value.match(/^[A-Za-z\s]+$/i);;
        errors.city = errors.city ? '' : ' must be valid city'
        break;

      case 'salary':
        errors.salary = value.match(/^[0-9]+( [a-zA-Z]+)*$/);
        errors.salary = errors.salary ? '' : 'must be valid'
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
          Profile:
          <Input inputType={'text'}
            name={'job_profile'}
            value={this.state.job_profile}
            placeholder={'job profile'}
            handleChange={this.handleInput} />
          <p>{this.state.formError.job_profile}</p>

        
          Job description:
          <Input inputType={'text'}
            name={'job_description'}
            value={this.state.job_description}
            placeholder={'job description'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.job_description}</p>

          Job expire date:
          <Input inputType={'text'}
            name={'job_expire_on'}
            value={this.state.job_expire_on}
            placeholder={'job expire on'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.job_expire_on}</p>

          City:
          <Input inputType={'text'}
            name={'city'}
            value={this.state.city}
            placeholder={'city'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.city}</p>

          Salary:
          <Input inputType={'text'}
            name={'salary'}
            value={this.state.salary}
            placeholder={'salary'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.salary}</p>

          <button className="btn btn-primary" onClick={this.handleEdit}>Edit Job</button>
        </form>
      </div>
    );
  }
}

export default JobEdit;