import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Feeling />
        <br/>
      </div>
    ); // end return
  } // end renter
} // end class

const reduxStateToProps = ( reduxState ) => ( { reduxState} );

export default connect( reduxStateToProps ) (App);