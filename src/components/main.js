import React from 'react'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Filter from './filter'
import axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        arrofJobs: [],
        myData:!!JSON.parse(localStorage.getItem('myData')),
         isLoggedin:true
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
                arrofJobs:res.data
             });
          })
      }

    render() {
        return (
            <div >
                <Header/>
                <Content jobData={this.state.arrofJobs} /> 
               { this.isLoggedin && <Filter myData={this.filter} jobData1={this.state.arrofJobs} /> }
               { this.isLoggedin && <Content jobData={this.state.arrofJobs} />   } 

                <Footer />
            </div>
        );
    }
}

export default Main;
