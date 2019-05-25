import React from 'react'

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company_name: '',
            job_profile: '',
            city: ''
        };
    }

    handleUserInput = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        );
    }

    submitForm = (event) => {
        event.preventDefault();
        const jobdata = this.props.jobData
        var data;
        if (this.state.company_name === '' && this.state.job_profile === '' && this.state.city === '') {
            data = jobdata;
        } else {
            data = jobdata.filter((item) => {
                if (this.state.company_name && item.company_name.toLowerCase() !== this.state.company_name.toLowerCase()) {
                    return false;
                }
                if (this.state.job_profile && item.job_profile.toLowerCase() !== this.state.job_profile.toLowerCase()) {
                    return false;
                }
                if (this.state.city && item.city.toLowerCase() !== this.state.city.toLowerCase()) {
                    return false;
                }
                else{
                    return true
                }

              
            })
        }
        this.props.myData(data)
    }

    render() {
        return (

            <div>
                <div className="container wb">
                    <form onSubmit={this.submitForm}>
                        <input type="text" onChange={this.handleUserInput} value={this.state.company_name} name="company_name" placeholder="Company" />
                        <input type="text" onChange={this.handleUserInput} value={this.state.job_profile} name="job_profile" placeholder="Jobs" />
                        <input type="text" onChange={this.handleUserInput} value={this.state.city} name="city" placeholder="Location" />
                        <button type="submit">Filter</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Filter