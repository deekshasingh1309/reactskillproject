import React from 'react'
import Pic from '../img3.png'

class Content extends React.Component {
  render() {
    const data = this.props.jobData
    return (
      <div className="row">{
        data.map((key, value) => {
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
                <p><b>JOB:</b> {key.job_description}</p>
                <p><b>CITY:</b> {key.city}</p>
                <p><b>EXPIRES ON:</b> {key.job_expire_on}</p>
                <button id="apply">Apply</button>
              </div>
            </div>
          )
        })
      }
      </div>
    )

  }
}

export default Content
