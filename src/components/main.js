import React from 'react'
import data from '../jobDetails'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Filter from './filter'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrofJobs: data
        }
    }
    filter = (filteredData) => {
        this.setState({
            arrofJobs: filteredData
        })
    }

    render() {
        return (
            <div >
                <Header />
                <Filter myData={this.filter} jobData1={data} />
                <Content jobData={this.state.arrofJobs} />
                <Footer />
            </div>
        );
    }
}

export default Main;
