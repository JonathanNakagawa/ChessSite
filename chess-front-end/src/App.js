import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Board} from './board-componenets/Board'

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Route path = "/" exact componenet="TodosList" />
      // </Router>
      <Board />

    );
  }
}

export default App;
