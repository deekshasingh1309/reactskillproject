import React from 'react'

class Content extends React.Component {
  key = this.props.jobData
  render() {

    return (
      <div className="row">{
        this.key.map((key, value) => {
          return (
            <div className="container content">
              <div className='col-sm-3'>
                <h4 >image</h4>
              </div>
              <div className='col-sm-5'>
                <p><b>Company:</b> {key.company_name}</p>
                <p><b>Profile:</b> {key.job_profile}</p>
                <p><b>Salary:</b> {key.salary}</p>
              </div>
              <div className='col-sm-4'>
                <p><b>Description:</b> {key.job_description}</p>
                <p><b>Expires On:</b> {key.job_expire_on}</p>
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
