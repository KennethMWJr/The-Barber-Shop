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
      <h1> <img className="barber-pole" src="https://library.kissclipart.com/20180918/pvw/kissclipart-barber-pole-clipart-barbers-pole-clip-art-a29f15c928695fa0.jpg" alt="Barber Pole"/>The Barber Shop</h1>
      </div>
      {/* Everything between "awning" div tags used to create awning in css */}
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
        <div className ="scallops">
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
