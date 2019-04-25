import React from 'react';
import data from './jobDetails'
import './App.css';
import Greet from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import Filter from './components/filter'
function App() {
  return (
    <div className="App">
   <Greet/>
   <Filter/>
   <Content jobData={data}/>
   <Footer/>
    </div>
  );
}

export default App;
