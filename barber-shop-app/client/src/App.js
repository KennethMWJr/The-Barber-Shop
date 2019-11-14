import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ClientForm from './components/ClientForm';
import ShowBarbers from './components/ShowBarbers';
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render () {
  return (
    <div className = "background main-container">
      <div className = "title">
      <h1>The Barber Shop</h1>
      </div>
      <div className = "awning">
        <div className = "border"></div>
        <div className = "sign">
        <ul>
          <li className = "blue-first"></li>
          <li className = "yellow-sign"></li>
          <li className = "blue-sign"></li>
          <li className = "yellow-sign"></li>
          <li className = "blue-sign"></li>
          <li className = "yellow-sign"></li>
          <li className = "blue-sign"></li>
          <li className = "yellow-sign"></li>
          <li className = "blue-sign"></li>
          <li className = "yellow-sign"></li>
          <li className = "blue-sign"></li>
          <li className = "yellow-sign"></li>
          <li className = "blue-sign-last"></li>
        </ul>
        </div>
        <div class ="scallops">
          <ul>
          {/* <li className = "blue"></li> */}
          <li className = "blue-first-bottom"></li>
          <li className = "yellow-scallops"></li>
          <li className = "blue-scallops"></li>
          <li className = "yellow-scallops"></li>
          <li className = "blue-scallops"></li>
          <li className = "yellow-scallops"></li>
          <li className = "blue-scallops"></li>
          <li className = "yellow-scallops"></li>
          <li className = "blue-scallops"></li>
          <li className = "yellow-scallops"></li>
          <li className = "blue-scallops"></li>
          <li className = "yellow-scallops"></li>
          <li className = "blue-scallops-last-bottom"></li>
          
          </ul>
        </div>
      </div>
      <div className = "show-barber">
       <ShowBarbers />
      </div>
      <div className = "footer">
      <Footer />
      </div>
    </div>
  );
}
}

export default () => <Router><App /></Router>;
