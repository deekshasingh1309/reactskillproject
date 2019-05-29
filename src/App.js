import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Signup from './redux/containers/signupContainer';
import Login from './redux/containers/loginContainer';
import {main} from './redux/containers/jobContainer';
import {company} from './redux/containers/jobContainer';
import {editform} from './redux/containers/jobContainer';
// import {apply} from './redux/containers/applyContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={main} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path="/addjobs" component={company}/>
            <Route path="/editform" component={editform}/>
            {/* <Route path="/apply" component={apply}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
