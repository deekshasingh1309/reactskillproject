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
        arrofJobs: []
        }    
    }
    filter = (filteredData) => {
        this.setState({
            arrofJobs: filteredData
        })
    }
    componentDidMount() {
        axios.get('http://localhost:8082/jobs')
          .then(res => {
            this.setState({ 
                arrofJobs:res.data.reverse()
             });
            
          })
      }

    render() {
        return (
            <div >
                <Header/>
                <Content jobData={this.state.arrofJobs} /> 
               { isLoggedin() && <Filter myData={this.filter} jobData1={this.state.arrofJobs} /> }
               { isLoggedin() && <Content jobData={this.state.arrofJobs} />   } 
                <Footer />
            </div>
        );
    }
}

export default Main;
