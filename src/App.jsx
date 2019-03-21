import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './page/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" Component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
