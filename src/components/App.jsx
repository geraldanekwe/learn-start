import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Stories from './Stories.jsx';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/stories' component={Stories}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
