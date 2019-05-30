import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Game} from './componenets/game'

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Route path = "/" exact componenet="TodosList" />
      // </Router>
      <Game />

    );
  }
}

export default App;
