import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Timeline from './pages/Timeline';

// console.log('Login', Login);
// console.log('Timeline', Timeline);
// console.log('BrowserRouter', BrowserRouter);
// console.log('Switch', Switch);
// console.log('Route', Route);

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/timeline" component={Timeline} />
      </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
