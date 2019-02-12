import React, { Component } from 'react';
import './App.css';
import Test from './components/test/test.js';
import Bottom from './components/bottom/bottom.js';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        This is App page
        <Test />
        <Bottom />
        {this.props.name}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    name: state.name
  }
}

export default connect(mapStatetoProps)(App);
