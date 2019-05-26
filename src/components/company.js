import React, { Component } from 'react';
import Input from './fields/inputField';
import SKILLS  from '../skills';
import { WithContext as ReactTags } from 'react-tag-input';

var user;
const suggestions = SKILLS.map((skills) => {
  return {
    id: skills,
    text: skills
  }
})

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class Company extends Component {
  constructor(props) {
    super(props);
    user = JSON.parse(localStorage.getItem('myData'))
    this.state = {
      jobFields: {
        job_profile: '',
        company_name: user.name,
        job_description: [],
        job_expire_on: '',
        city: '',
        salary: '',
        suggestions: suggestions,
      },
      skill: '',
      job_skills: [],
      formError: { job_profile: '', company_name: '', job_description: '', job_expire_on: '', city: '', salary: '' }
    }
  }

  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({

      jobFields:
      {
        ...prevState.jobFields, [name]: value,
        job_description: this.state.job_skills,

      }
    }), () => { this.validate(name, value) })
  }

  handleCompany = (e) => {
    e.preventDefault();
    const { job_profile, company_name, job_description, job_expire_on, city, salary } = this.state.jobFields;

    this.props.addJob({ job_profile, company_name, job_description, job_expire_on, city, salary })
    if (this.state.jobFields.job_profile && this.state.jobFields.job_description && this.state.jobFields.company_name && this.state.jobFields.job_expire_on && this.state.jobFields.city && this.state.jobFields.salary) {
      alert("successfully POSTED")

      this.setState({
        job_profile: '',
        company_name: '',
        job_description: [],
        job_expire_on: '',
        city: '',
        salary: ''

      })
      return this.props.history.push('/');
    }
    else {
      alert("Blank form can't be submitted")
      return this.props.history.push('/addjobs');
    }
  }

  handleDelete = (i) => {
    const { job_description } = this.state.jobFields;
    this.setState({
      job_description: job_description.filter((tag, index) => index !== i),
    });
  }

  handleAddition = (tag, e) => {
    console.log("hfxhjfh")
    if (e.key == "Enter") {
      console.log('dfghg')
    }

  }


  validate = (field, value) => {
    let errors = this.state.formError;
    switch (field) {
      case 'job_profile':
        errors.job_profile = value.match(/^[A-Za-z\s]+$/i)
        errors.job_profile = errors.job_profile ? '' : 'it is invalid';
        break;

      // case 'company_name':
      //   errors.company_name = value.match(/^[A-Za-z\s]+$/i)
      //   errors.company_name = errors.company_name ? '' : 'it is invalid';
      //   break;

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
  displayTags() {
    if (this.state.job_skills.length > 0) {
      return (<div>
        {
          this.state.job_skills.map((key, value) => {
            return (
              <span class="ReactTags__tag" draggable="true" >{key}
                <a class="ReactTags__remove">×</a>
              </span>
            )
          })
        }
      </div>)

    } else {
      return (<div />)
    }
  }

  render() {
    const job_skills = this.state.job_skills;
    //const job_description = this.state.job_skills;

    return (

      <div>
        {/* <form className="form" > */}
        Profile:
          <Input inputType={'text'}
          name={'job_profile'}
          value={this.state.jobFields.job_profile}
          placeholder={'job profile'}
          handleChange={this.handleInput} />
        <p>{this.state.formError.job_profile}</p>

        {/* Company Name:
          <Input inputType={'text'}
            name={'company_name'}
            value={this.state.jobFields.company_name}
            placeholder={'company name'}
            handleChange={this.handleInput}
          />
          <p>{this.state.formError.company_name}</p> */}

        Job description:
          <div class="ReactTags__tags">
          <div class="ReactTags__selected">
            {this.displayTags()}
            <div class="ReactTags__tagInput">
              <Input inputType={'text'}
                class={"ReactTags__tagInputField"}
                name={'Skills'}
                value={this.state.skill}
                placeholder={'skills'}
                aria-label={"Add new tag"}
                handleChange={text => {
                  this.setState({ skill: text.target.value });
                }}
                suggestions={suggestions}
                handleTagClick={this.handleTagClick}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    let skill = this.state.skill
                    if (skill !== '') {
                      this.setState({ job_skills: [...job_skills, skill], skill: "", job_description: [...job_skills, skill] });

                    }
                    this.setState({ job_description: this.state.job_skills })
                    
                  }
                }}

              />
            </div>
          </div>
        </div>
        <p>{this.state.formError.job_description}</p>

        Job expire date:
          <Input inputType={'text'}
          name={'job_expire_on'}
          value={this.state.jobFields.job_expire_on}
          placeholder={'job expire on'}
          handleChange={this.handleInput}
        />
        <p>{this.state.formError.job_expire_on}</p>

        City:
          <Input inputType={'text'}
          name={'city'}
          value={this.state.jobFields.city}
          placeholder={'city'}
          handleChange={this.handleInput}
        />
        <p>{this.state.formError.city}</p>

        Salary:
          <Input inputType={'text'}
          name={'salary'}
          value={this.state.jobFields.salary}
          placeholder={'salary'}
          handleChange={this.handleInput}
        />
        <p>{this.state.formError.salary}</p>

        <button className="btn btn-primary" onClick={this.handleCompany}>Add</button>
        {/* </form> */}
      </div>
    );
  }
}

export default Company;