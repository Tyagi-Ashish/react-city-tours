import React, { Component } from 'react';
import "./App.scss";
import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/TourList';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <TourList/>
      </React.Fragment>
    )
  }
}

