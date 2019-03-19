import React, { Component } from 'react';
import './App.css';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from './components/Home';
import Register from './components/Register';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
