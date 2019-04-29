import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Signup from './components/signup';
import Login from './components/login';
import Main from './components/main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>

          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
