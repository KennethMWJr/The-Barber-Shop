import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ClientForm from './components/ClientForm';
import ShowBarbers from './components/ShowBarbers';
import './App.css';

class App extends Component {
  render () {
  return (
    <div>
       <h1>The Barber Shop</h1>
       <ShowBarbers />
    </div>
  );
}
}

export default () => <Router><App /></Router>;
