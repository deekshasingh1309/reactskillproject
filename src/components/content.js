import React from 'react'
import Pic from '../img3.png'
import { withRouter } from "react-router-dom";

class Content extends React.Component {
  constructor(props) {
    super()
    this.state = {
      data: [],
      appliedData:[],
      user: JSON.parse(localStorage.getItem('myData'))
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.appliedData &&this.state.appliedData !== nextProps.appliedData  ){
      this.setState({
        appliedData: nextProps.appliedData
      })
    }
    
  }
  componentDidMount() {
   if(this.state.user){
    this.props.get_applyjob(this.state.user._id)
   }
    this.setState({
      data: this.props.jobData
    })
  }

  edit = (key) => {
    this.props.history.push({ pathname: '/editform', state: { data: key } })
  }

  // componentWillMount() {
  //   if (localStorage.getItem('Currentid')) {
  //     let user_id = localStorage.getItem('Currentid');
  //     user_id = user_id.replace(/"/g, "");
  //     this.props.applydata.get_applyjob(user_id);

  //   }
  //   this.setState({
  //     apply_data: this.props.applydata.apply
  //   })
  // }
  // apply = (ele, e) => {
  //   if (localStorage.getItem('isLoggedIn') === 'false') {
  //     this.props.history.push('/login');
  //   }
  //   else {
  //     let user_id = localStorage.getItem('Currentid');
  //     user_id = user_id.replace(/"/g, "");
  //     let job_id = ele._id;
  //     let job_profile = ele.job_profile;
  //     let company_name = ele.company_name;
  //     let city = ele.city;
  //     this.props.applydata.apply_job({ user_id, job_id, job_profile, company_name, city });
  //     this.props.applydata.get_applyjob(user_id);


  //     this.setState({
  //       apply_data: this.props.applydata.apply
  //     });
  //   }
  // }


  apply = (key) => {
    window.location.reload();
   this.props.apply_job({
        user_id: this.state.user,
        job_id: key._id,
        company_name: key.company_name,
        job_profile: key.job_profile,
        city: key.city,
      })
    }

  render() {
    console.log(this.state.appliedData)
    let user = JSON.parse(localStorage.getItem('myData'));
    let data = this.props.jobData
    return (
      <div className="row">
        {
          data.map((key, value) => {
            console.log('key....', key)
            return (
              <div className="container content" key={value}>
                <div className='col-sm-3'>
                  <img src={Pic} alt="logo" id="company"></img>
                </div>
                <div className='col-sm-5'>
                  <p><b>COMPANY:</b> {key.company_name}</p>
                  <p><b>PROFILE:</b> {key.job_profile}</p>
                  <p><b>SALARY:</b> {key.salary}</p>
                </div>
                <div className='col-sm-4'>
                  <b>JOB SKILLS:</b>
                  {key.job_description.map((key1, val) => {
                    return (
                      <div>{key1['id']}</div>
                    )
                  })
                  }
                  <p><b>CITY:</b> {key.city}</p>
                  <p><b>EXPIRES ON:</b> {key.job_expire_on}</p>{
                    user !== null && user.roles === 3? <button id="edit" onClick={(e) => { this.edit(key) }}>Edit</button> :this.state.appliedData.find((el)=>{return el.job_id === key._id}) ? <button disabled={true} id="applied">Applied</button> : <button onClick={(e) => { this.apply(key) }} id="apply">Apply</button> 
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    )

  }
}

export default withRouter(Content)
//this.state.appliedData.find((el)=>{return el.job_id === key._id}) 

// : <button id="applied">Applied</button>