import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ViewMap from './components/ViewMap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



class App extends Component { 
  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <ul>
            <li><Route exact path = '/' component = { HomePage } /></li>
            <li><Route path = '/map' component = { ViewMap } /></li>
            <li><Route path = '/view'/></li>
          </ul>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
