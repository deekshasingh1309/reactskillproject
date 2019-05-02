import React from 'react'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Filter from './filter'
import axios from 'axios';
import isLoggedin from './isLoggedin';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrofJobs: [],
            JobPosted: [],
            forFilter: []

        }

    }

    user = JSON.parse(localStorage.getItem('myData'))

    filter = (filteredData) => {
        this.setState({
            arrofJobs: filteredData
        })
    }

    componentDidMount() {
        axios.get('http://localhost:8082/jobs')
            .then(res => {
                console.log(res)
                this.setState({
                    arrofJobs: res.data.reverse(),
                    forFilter: res.data
                });

                try {
                    if (this.user.roles === 3) {
                        const filteredCompanyPost = this.state.arrofJobs.filter((posts) => {
                            if (this.user.name.toLowerCase() === posts.company_name.toLowerCase() ) {
                                return true;
                            }
                            return false;
                        })
                        this.setState({
                            JobPosted: filteredCompanyPost
                        })
                        console.log(filteredCompanyPost)
                    } 
                } catch (error) {
                    console.log(error.message)
                }
            })
    }

    render() {
        return (
            <div >
                <Header />
                <Filter myData={this.filter} jobData={this.state.forFilter} />
                {!isLoggedin() && <Content jobData={this.state.arrofJobs} />}
                {isLoggedin() && this.user.roles === 2 && <Content jobData={this.state.arrofJobs} />}
                {isLoggedin() && this.user.roles === 3 && <Content jobData={this.state.JobPosted} />}

                <Footer />
            </div>
        );
    }
}

export default Main;
