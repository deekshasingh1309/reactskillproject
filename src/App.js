import React from 'react';
import data from './jobDetails'
import './App.css';
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import Filter from './components/filter'


class App extends React.Component {
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
      <div className="App">
        <Header />
        <Filter myData={this.filter} jobData1={data} />
        <Content jobData={this.state.arrofJobs} />
        <Footer />
      </div>
    );
  }
}

export default App;
