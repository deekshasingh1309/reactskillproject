import React from 'react'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Filter from './filter'

import isLoggedin from './isLoggedin';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrofJobs: [],
            JobPosted: [],
            forFilter: [],
            user :localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')) : {}
        }
    }

    filter = (filteredData) => {
        this.setState({
            arrofJobs: filteredData
        })
    }

    componentDidMount() {
    this.props.JobListing(this.state.user.skills);
    }

    componentWillReceiveProps(nextProps) {
        nextProps.dataJob && this.props.JobListing();
            this.setState({
                arrofJobs: nextProps.Job_Listing,
                forFilter: nextProps.Job_Listing
            },()=>{
                if (this.state.user.roles === 3) {
                    const filteredCompanyPost = this.state.arrofJobs.filter((posts) => {
                        if (this.state.user.name.toLowerCase() === posts.company_name.toLowerCase() ) {
                            return true;
                        }
                        return false;
                    })
                    this.setState({
                        JobPosted: filteredCompanyPost
                    })
                } 
            })
    }

    render() {
        return (
            <div >
                <Header />
                <Filter myData={this.filter} jobData={this.state.forFilter} />
                {!isLoggedin() && <Content jobData={this.state.arrofJobs.reverse()} />}
                {isLoggedin() && this.state.user.roles === 2 && <Content jobData={this.state.arrofJobs} />}
                {isLoggedin() && this.state.user.roles === 3 && <Content jobData={this.state.JobPosted.reverse()} />}

                <Footer />
            </div>
        );
    }
}

export default Main;
